const mongoose = require("mongoose");
const db = require("./connection");


const MemesSchema = mongoose.Schema({
    // randomId: mongoose.Schema.Types.ObjectId,
    userId: String,
    topText: String,
    bottomText: String,
    url: String,
  });

  const MemesModel = mongoose.model("Memes", MemesSchema);

module.exports = MemesModel;