const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://Malika:Auma123@cluster0.gffsotd.mongodb.net/authuser?retryWrites=true&w=majority"
)

module.exports = db