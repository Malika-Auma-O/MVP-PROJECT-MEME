import { useState, useEffect } from "react";
import axios from "axios";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
      .then(response => {
        setAllMemes(response.data.data.memes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function randomImage() {
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url
    setMeme(prevMeme => {
      return { ...prevMeme, randomImage: url}
    })
}

function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}

return (
  <div>
    <input 
    type="text"
    id="input1" 
    placeholder="Top Text"
    name="topText"
    value={meme.topText}
    onChange={handleChange}
    />

    <input 
    type="text"
    id="input2" 
    placeholder="Bottom Text"
    name="bottomText"
    value={meme.bottomText}
    onChange={handleChange}
    />

    <br />

    <button
    onClick={randomImage}
    className="meme-btn"
    >
      Generate meme!
    </button>

    <div>
    <img src={meme.randomImage} className="meme-image" alt="meme img" />
    <h2 className="meme-text top">{meme.topText}</h2>
    <h2 className="meme-text bottom">{meme.bottomText}</h2>
    </div>
  </div>
)

}

export default Meme;