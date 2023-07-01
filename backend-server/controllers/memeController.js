const Memes = require("../modules/memes.js");

const getMemes = async (req, res) => {
  let Memes = await Memes.find();
  res.send(Memes);
}

const postMeme = async (req, res) => {
  await Memes.create(req.body);
  res.send({msg: "posted successfully"});
}

const deleteMeme = async (req, res) => {
  await Memes.deleteOne({_id: req.params.id});
  res.send({msg: "deleted successfully"});
}

const updateMeme = async (req, res) => {
  await Memes.findByIdAndUpdate({_id: req.params.id}, req.body);
  res.send({msg: "up successfully"});
}

const getUserMemes = async (req, res) => {
  let Memes = await Memes.find({userId: req.params.userId});
  res.send(Memes);
}

module.exports = {
  getMemes,
  postMeme,
  deleteMeme,
  updateMeme,
  getUserMemes
}
