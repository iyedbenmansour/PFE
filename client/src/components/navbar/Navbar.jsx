import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Import useAuth hook
import "./navbar.css";
import useStore from '../../store'; 
const Navbar = () => {
  const loggedIn = useStore((state) => state.loggedIn)
  const logout = useStore((state) => state.logout)

  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (loggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Parking Time</span>
        </Link>
        <div className="navItems">
          <button className="navButton" onClick={handleContactUsClick}>Contact Us</button>
          {loggedIn ? (
            <button className="navButton" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="navButton" onClick={handleLoginClick}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
