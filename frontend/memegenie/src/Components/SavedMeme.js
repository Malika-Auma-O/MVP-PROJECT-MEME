import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SavedMeme() {
  const navigate = useNavigate();
  const [savedMemes, setSavedMemes] = useState([]);

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      axios.get("http://localhost:3636/meme").then(response =>{
        setSavedMemes(response.data);
      })
      .catch((error) => console.log("Error fetching memes:", error));
    } else {
      navigate("/")
    }
    
  },[navigate])

  return (
    <div className="meme-form">
      <h1>Saved Memes</h1>
      <div className="saved">
        {savedMemes.length ? (
          savedMemes.map((meme, index) => (
            <div key={index} className="meme">
              <img src={meme.randomImage} alt="meme" className="meme-image" />
              <h2 className="meme-text top">{meme.topText}</h2>
              <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
          ))
        ) : (
          <p>No memes available</p>
        )}
      
      </div>
    </div>
  );
}

export default SavedMeme;