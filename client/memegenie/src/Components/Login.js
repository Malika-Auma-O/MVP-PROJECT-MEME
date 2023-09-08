import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toRegister() {
    navigate("/register");
  }

  function login() {
    axios.post("http://localhost:3636/user/login", {email, password}).then((response) => {
      console.log(response.data)
      if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token saved in local storage.');
        navigate("/home")
      } else {
        alert(`Error ${response.status}: ${response.message}`);
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="login">
      <p>Login page</p>
      <input type="email"
       placeholder="Enter email" 
       onChange={(e)=>{
        setEmail(e.target.value)
      }} 
      />

      <br />

      <input type="password"
       placeholder="Enter password"
       onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <br />
      
      <button
      className="btn"
      onClick={() => {
        login();
      }}
      >
      Login
      </button>
      
      <p>Don't have an account? {" "}
        <a href="/register" 
        onClick={() =>{
          toRegister();
        }} 
        >
        Register
        </a> </p>
    </div>
  );
}

export default Login;