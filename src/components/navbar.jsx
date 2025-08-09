import React from 'react';
import './Navbar.css';


const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="logo">{props.logoText}</div>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
