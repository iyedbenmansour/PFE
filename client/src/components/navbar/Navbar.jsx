import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // This should be dynamically set based on your authentication logic

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate('/contactus');
    } else {
      navigate('/login');
    }
  };

  const handleContactUsClick = () => {
    if (isLoggedIn) {
      navigate('/contactus');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Parking Time</span>
        <div className="navItems">
          <button className="navButton" onClick={handleContactUsClick}>Contact Us</button>
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
