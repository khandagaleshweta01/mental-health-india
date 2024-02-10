// Register.jsx
import React from "react";
import "./Register.css";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-header">Sign Up</h2>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="username"><FaUser /> Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaKey /> Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
