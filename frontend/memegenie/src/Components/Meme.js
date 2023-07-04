import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Meme() {
  const navigate = useNavigate();
  const [allMemes, setAllMemes]  = useState([]); 
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  
  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
      .then(response => {
        const _allMemes = response.data.data.memes.map(meme => ({
          url: meme.url,
          id: meme.id
        }))

        setAllMemes(_allMemes)
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

const [memesArray, setMemesArray] = useState([]);

useEffect(() =>{
  if (localStorage.getItem("token")) {
    axios.get("http://localhost:3636/meme").then(response =>{
      setMemesArray(response.data)
    })
    .catch(error =>{
      console.log("Error fetching memes:", error);
    })
  }
},[])

function saveMeme() {
  if (localStorage.getItem("token")) {
    const savedMeme = {
      topText: meme.topText,
      bottomText: meme.bottomText,
      randomImage: meme.randomImage
    };
  
    setMemesArray(prevMeme => [...prevMeme, savedMeme]);
  
    axios.post("http://localhost:3636/meme", savedMeme)
    .then(response =>{
      console.log("Meme saved:", response.data);
      navigate("/saved-memes");
    })
    .catch((err)=>console.log('Error saving meme:', err));
  } else{
    navigate("/");
  }
}

function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }));
}

  return ( 
    <div className="meme-form">
      <div>
      <input 
        type="text" 
        id="input1" 
        placeholder="Top text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

      <input 
        type="text" 
        id="input2" 
        placeholder="Bottom text"
        name="bottomText" 
        value={meme.bottomText}
        onChange={handleChange}
        />

        <br />

        

      <div className="generate">
        {allMemes.length ?
        <div>
          <button
        onClick={randomImage}
        className="btn meme-btn"
        >
          Generate a random meme image!
        </button>
        <div className="meme">
          <img src={meme.randomImage}
          alt="meme"
          className="meme-image"
          />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>          
        </div>

        <button
        onClick={saveMeme}
        className="btn save-btn"
        >
          Save meme
        </button> 
        </div>
        :<p>No images to generate</p> }
      </div>

      {/* <div className="saved">
        {memesArray.length ? (
          memesArray.map((meme, index) => (
            <div key={index} className="meme">
              <img src={meme.randomImage} alt="meme" className="meme-image" />
              <h2 className="meme-text top">{meme.topText}</h2>
              <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
          ))
        ) : (
          <p>No memes available</p>
        )}
      
      </div> */}
      
      </div>

    </div>
   );
}

export default Meme;