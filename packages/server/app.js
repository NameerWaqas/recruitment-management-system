require("./utils/dbConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth.js");
const jobs = require("./routes/jobs");

// Middle-wares
app.use(cors());
app.use(express.json());

// routes
app.use("/users", auth);
app.use("/jobs", jobs);

app.get("/", (req, res) => {
  res.status(200).send("Connected to server");
});

app.listen(5000);
