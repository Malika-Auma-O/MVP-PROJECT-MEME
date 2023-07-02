//import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>}/> 
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
