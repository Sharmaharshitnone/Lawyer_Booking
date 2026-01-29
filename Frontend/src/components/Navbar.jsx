import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_lawyer from "../assets/logo_lawyer.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo_lawyer} alt="Logo" className="logo-img" />
      </div>

      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/All_lawyer">All Lawyers</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      {/* Right Buttons */}
      <div className="buttons">
          <Link to="/signup">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
