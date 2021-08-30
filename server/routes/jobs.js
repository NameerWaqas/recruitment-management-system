const jobsNS = require("../models/job");
const userNS = require("../models/user");
const quizNS = require("../models/quiz");
const resultsNS = require("../models/results");
const messagesNS = require("../models/messages");
const technicalTestNS = require("../models/technicalTest");
const authenticate = require("../utils/verifyToken");
const express = require("express");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  try {
    if (req?.user) {
      // sending all registered jobs in response
      const JDs = await jobsNS.find();
      return res.status(200).json(JDs);
    }
    return res.status(403).send();
  } catch {
    return res.status(500).send();
  }
});

router.post("/", authenticate, async (req, res) => {
  try {
    const {
      title,
      jobType,
      organization,
      openings,
      country,
      city,
      description,
      academic_test: questions,
      technical_test,
      skills,
    } = req?.body || "";
    const { id: technicalTestId } = technical_test || "";

    if (req?.user) {
      const record = await (
        await userNS.findOne({ email: req?.user, type: "recruiter" })
      ).toJSON();
      if (record === null) res.status(403).send();
      // creating new job for recruiter
      const jobRecord = await (
        await jobsNS.create({
          identifier: record?.email,
          description,
          title,
          job_type: jobType,
          organization,
          openings,
          country,
          city,
          skills,
        })
      ).toJSON();

      const quizRecord = await (
        await quizNS.create({ jobId: jobRecord?._id, questions })
      ).toJSON();

      const technicalTestRecord = await (
        await technicalTestNS.create({
          jobId: jobRecord?._id,
          testId: technicalTestId,
        })
      ).toJSON();

      return res.status(201).json({
        ...jobRecord,
        quiz: { ...quizRecord },
        technical: { ...technicalTestRecord },
      });
    }
    return res.status(403).send();
  } catch {
    return res.status(500).send();
  }
});

router.get("/quiz", authenticate, async (req, res) => {
  try {
    if (req?.user) {
      let { quizId } = req.query || "";
      const quiz = await quizNS.findOne({ jobId: quizId });
      const { questions } = quiz || "";
      return res.status(200).json(questions || []);
    } else {
      res.status(403).send();
    }
  } catch {
    res.status(500).send("Internal server error");
  }
});

router.post("/quiz", verifyToken, async (req, res) => {
  try {
    const { jobId, userId, marks } = req?.body;
    const res = await jobsNS.find({ _id: jobId });
    const { identifier } = res[0];
    await resultsNS.create({
      jobId,
      testOf: identifier,
      givenBy: userId,
      marks,
    });
    res.status(201).send("Successfully submitted test");
  } catch {
    res.status(500).send("Internal server error");
  }
});

router.post("/messages", verifyToken, async (req, res) => {
  try {
    const { jobId, testOf, givenBy } = req?.body;
    const job = await technicalTestNS.find({ jobId });
    const { testId } = job[0] || "";
    const candidate = await userNS.find({ _id: givenBy });
    const recruiter = await userNS.find({ email: testOf });
    await messagesNS.create({
      to: candidate[0],
      from: recruiter[0],
      message: { type: "technical", link: testId },
      candidate: givenBy,
      recruiter: testOf,
    });
    return res.status(201).send("Message Sent");
  } catch {
    res.status(500).send("Internal server error");
  }
});

router.get("/messages", verifyToken, async (req, res) => {
  try {
    const { id, type } = await req?.query;
    if (type === "candidate") {
      const messages = await messagesNS.find({ candidate: id });
      res?.status(200).send(messages);
    } else {
      const messages = await messagesNS.find({ recruiter: id });
      res?.status(200).send(messages);
    }
  } catch {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
