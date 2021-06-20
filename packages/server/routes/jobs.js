const jobsNS = require("../models/job");
const userNS = require("../models/user");
const quizNS = require("../models/quiz");
const technicalTestNS = require("../models/technicalTest");
const authenticate = require("../utils/verifyToken");
const express = require("express");

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  try {
    if (req?.user) {
      // sending all registered jobs in response
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
      job_type,
      role_type,
      openings,
      country,
      city,
      description,
      academic_test: questions,
      technical_test,
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
          job_type,
          role_type,
          openings,
          country,
          city,
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

module.exports = router;
