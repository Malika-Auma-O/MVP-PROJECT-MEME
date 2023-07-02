import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Meme from "./Meme";


function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    _id: "",
    email: "",
  });

  useEffect(() => {
    if(localStorage.getItem("token")) {
      // check token and get user data
      axios.post("http://localhost:3636/user/verify", {token: localStorage.getItem("token")}).then(({data}) =>{
        if(data._id) {
          setUserData(data);
          axios.get("http://localhost:3636/meme/" + data._id).then(({data}) =>{
            console.log('Memes', data)
          })
        } else {
          navigate("/");
        }
    })
    } else {
      navigate("/");
    }
  },[navigate])


  return (
    <div className="App">
      <h1>This is the profile of {userData.email} </h1>
      <Meme/>
    </div>
  );
}

export default Profile;