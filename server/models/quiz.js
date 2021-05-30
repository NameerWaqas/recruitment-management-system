const mongoose = require("mongoose");

const quizModel = mongoose.Schema({
  jobId: {
    type: String,
    require: true,
  },
  questions: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("quizzes", quizModel, "quizzes");
