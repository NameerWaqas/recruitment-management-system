const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  identifier: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  role_type: {
    type: String,
    require: true,
  },
  openings: {
    type: Number,
    require: true,
  },
  job_type: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("jobs", jobSchema, "jobs");
