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
        } else {
          navigate("/");
        }
    })
    .catch(error =>{
      alert(`${error}`);
    })
    } else {
      navigate("/");
    }
  },[navigate])

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="App">

      <h1>Welcome to your account {userData.email} </h1>
      <button
      onClick={()=>logout()}
      className="btn logout-btn"
      >
        Logout
      </button>
      
      <br/>
      <hr/>
      <Meme/>      
    </div>
  );
}

export default Profile;