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

        <div>
          
        </div>
      </div>
    </div>
   );
}

export default Navbar;
