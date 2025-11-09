import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">XYZ College</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/admission">Admission</Link></li> {/* ✅ Correct route */}
        <li><Link to="/nirf">NIRF Ranking</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/campus">Campus Life</Link></li>
        <li><Link to="/department">Department</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      </div>

      <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
