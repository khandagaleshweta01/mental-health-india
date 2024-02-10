import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
