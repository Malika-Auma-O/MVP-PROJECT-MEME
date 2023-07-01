const MemesModel = require("../modules/memes.js");
// const { v4: uuidv4 } = require('uuid');

const getMemes = async (req, res) => {
  try {
    let memes = await MemesModel.find();
    res.send(memes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while getting the memes" });
  }
};

const postMeme = async (req, res) => {
  const { url, topText, bottomText, userId } = req.body;

  const meme = new MemesModel({
    // randomId: randomId || Math.round((new Date()).getTime() / 10),
    // randomId: randomId || mongoose.Types.ObjectId(),
    // randomId: randomId || uuidv4(),
    userId: userId,
    url: url,
    topText: topText,
    bottomText: bottomText,
  })

  try {
    await meme.save();
  res.send({msg: "Meme posted successfully"});

  } catch (error) {
    console.log(error)
    res.status(500).send({error: "An error occurred while posting the meme"})
  }
}

const deleteMeme = async (req, res) => {
  try {
    await MemesModel.deleteOne({ _id: req.params.id });
    res.send({ msg: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while deleting the meme" });
  }
};

const updateMeme = async (req, res) => {
  try {
    await MemesModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send({ msg: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while updating the meme" });
  }
};

const getUserMemes = async (req, res) => {
  try {
    let memes = await MemesModel.find({ userId: req.params.userId });
    res.send(memes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while retrieving the user's memes" });
  }
};


module.exports = {
  getMemes,
  postMeme,
  deleteMeme,
  updateMeme,
  getUserMemes
}
