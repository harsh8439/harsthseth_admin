import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";   // Make sure logo.png exists
import lady from "../../assets/women.png";   // Make sure lady.png exists



const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="left-side">
          <div className="brand">
            <img src={logo} alt="logo" className="logo" />
            <h1>Ventoutt</h1>
          </div>

          <h2>Log In</h2>

          <label>Email</label>
          <input type="email" placeholder="Enter Your Email" />

          <label>Password</label>
          <div className="password-box">
            <input type="password" placeholder="Enter Password" />
            <span className="eye">👁</span>
          </div>

          <button className="login-btn">Log In</button>

          <p className="link-text">Forgot username or password?</p>
          <p className="link-text">Create new account</p>
        </div>

        <div className="right-side">
          <img src={lady} alt="lady" className="lady-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
