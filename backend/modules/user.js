const db = require("./connection.js");
const mongoose = require("mongoose");

const User = mongoose.model("User", {
  // name: String,
  email:String,
  password: String

});

module.exports = User;