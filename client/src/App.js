//import react-router-dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import SavedMeme from "./Components/SavedMeme";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>}/> 
            <Route path="/home" element={<Profile/>}/>
            <Route path="/saved-memes" element={<SavedMeme />} />
          </Routes>
        </div>
        <footer>
        <small>©2023 copyright. All rights reserved</small>
        </footer>
        
      </Router>
    </div>
  );
}

export default App;
