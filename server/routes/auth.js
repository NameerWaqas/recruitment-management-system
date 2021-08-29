require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usersNS = require("../models/user");
const authenticate = require("../utils/verifyToken");
const verifyToken = require("../utils/verifyToken");

router.post("/register", async (req, res) => {
  try {
    const { email, username, type, password } = req?.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      email,
      username: username,
      password: hashedPassword,
      type,
    };
    const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
    const record = await (
      await usersNS.create({ ...user, jwt: token })
    ).toJSON();
    delete record["password"];
    return res.status(201).json({ ...record, jwt: token });
  } catch {
    res.status(500).send("An error has occurred, please try later.");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req?.body;
    const user = await (await usersNS.findOne({ email })).toJSON();
    if (user === null) return res.status(404).send();
    if (await bcrypt.compare(password, user?.password)) {
      delete user?.password;
      return res.status(200).json(user);
    }
    return res.status(404).send();
  } catch {
    res.status(500).send();
  }
});

router.get("/me", verifyToken, async (req, res) => {
  if (req?.user) {
    const user = await (await usersNS.findOne({ email: req?.user })).toJSON();
    delete user["password"];
    return res.status(200).json(user);
  }
  res.status(404).send();
});

// router.put('/update',verifyToken,async(req,res)=>{
//   if(req?.user){
//     const {}
//     const user = await (await usersNS.updateOne({email:req?.user},{username:}))
//   }
// })

module.exports = router;
