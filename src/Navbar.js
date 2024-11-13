import React from 'react';
import './App.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="The Assigner Logo" />
       
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">IELTS & PTE</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="social-media">
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-telegram"></i></a>
      </div>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;