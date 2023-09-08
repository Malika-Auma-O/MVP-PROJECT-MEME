import { Link } from "react-router-dom";
import genieLogo from "../images/logogenie.png";

function Navbar() {

  return ( 
    <div className="navbar">

      <div className="left-nav">       
        <img
        className="nav-logo" 
        src={genieLogo}
        alt='Genie Logo'
        />
        <h2 className="nav-title">MemeGenie</h2>
      </div>

      <div className="right-nav">
          <ul className="nav-links">
            <li>
            <Link to="/home" className="list-item">Home</Link>
            </li>
            <li>
            <Link to="/saved-memes" className="list-item">Saved Memes</Link>
            </li>
          </ul>      
        </div>
    </div>
   );
}

export default Navbar;
