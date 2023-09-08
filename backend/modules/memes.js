const mongoose = require("mongoose");
const db = require("./connection");


const MemesSchema = mongoose.Schema({
//userId: String,
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true
    // },
    topText: String,
    bottomText: String,
    randomImage: String,
  });

  const MemesModel = mongoose.model("Memes", MemesSchema);

module.exports = MemesModel;