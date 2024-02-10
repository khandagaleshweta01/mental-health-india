// Navbar.js
import React from 'react';
import { Button } from '@mui/material';

import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="https://images.app.goo.gl/NcMahEZsL5aXWiheA" alt="Logo" />
          <h1 className="website-name">Mental Health India</h1>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <Button variant="outlined" color="inherit" href="#" className="login-button">Login</Button>
          <Button variant="contained" color="primary" href="#" className="signup-button">Sign Up</Button>
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
