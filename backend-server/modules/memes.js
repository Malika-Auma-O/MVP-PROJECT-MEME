const db = require("./connection");
const mongoose = require("mongoose");

const Memes = mongoose.model("Memes", {
    name: String,
    userId: String
});

module.exports = Memes;