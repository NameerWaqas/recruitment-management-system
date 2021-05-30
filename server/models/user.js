const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  jwt: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("users", userSchema, "users");
