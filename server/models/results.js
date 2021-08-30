const mongoose = require("mongoose");

const resultsModel = mongoose.Schema({
  jobId: {
    type: String,
    require: true,
  },
  testOf: {
    type: String,
    require: true,
  },
  givenBy: {
    type: String,
    require: true,
  },
  marks: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("results", resultsModel, "results");
