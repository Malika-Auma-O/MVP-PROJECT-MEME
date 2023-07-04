//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Meme from "./Components/Meme";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>}/> 
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/meme" element={<Meme />} />
            {/* <Route path="/savedMeme" element={<SavedMeme />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
