const mongoose = require("mongoose");

const messageSchema = {
  to: {
    type: Object,
    require: true,
  },
  from: {
    type: Object,
    require: true,
  },
  message: {
    type: Object,
    require: true,
  },
  candidate: {
    type: String,
    require: true,
  },
  recruiter: {
    type: String,
    require: true,
  },
};

module.exports = mongoose.model("messages", messageSchema, "messages");
