import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toLogin() {
    navigate("/");
  }

  function register() {
    axios.post("http://localhost:3636/user/register", {email, password}).then((response) => {
      console.log(response.data)
      if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token saved in local storage.');
        navigate("/profile")
      } else {
        alert(`Error ${response.status}: ${response.message}`);
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="Register">
      <input type="email"
       placeholder="email" 
       onChange={(e)=>{
        setEmail(e.target.value)
      }} 
      />

      <input type="password"
       placeholder="password"
       onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <button
      onClick={() => {
        register();
      }}
      >
        Register
        </button>

      <p>Have an account? {" "}
        <a 
        onClick={() =>{
          toLogin();
        }} 
        >
        Login
        </a> </p>
    </div>
  );
}

export default Register;