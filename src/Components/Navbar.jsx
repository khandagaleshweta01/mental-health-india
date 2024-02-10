// Navbar.js
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../logo.png'; // Import logo.png file

import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" /> {/* Use imported logo */}
          <h1 className="website-name">Mental Health India</h1>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {/* Use Link component for navigation */}
          <Button variant="outlined" color="inherit" component={Link} to="/login" className="login-button">Login</Button>
          <Button variant="contained" color="primary" component={Link} to="/register" className="signup-button">Sign Up</Button>
        </div>
        <div className="user-profile">
          {/* Assuming user avatar */}
          <img src="user_avatar.png" alt="User Avatar" />
          {/* Dropdown for user options */}
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
