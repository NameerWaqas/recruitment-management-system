const mongoose = require("mongoose");

const technicalTestSchema = mongoose.Schema({
  jobId: {
    type: String,
    require: true,
  },
  testId: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("techTests", technicalTestSchema, "techTests");
