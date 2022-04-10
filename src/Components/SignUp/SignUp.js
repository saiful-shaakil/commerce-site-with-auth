import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, SetError] = useState("");

  const handleSubmit = () => {
    console.log("sign");
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };
  return (
    <div className="full-container">
      <div className="form-container">
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmail} type="text" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePass}
                type="password"
                name="password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPass}
                type="password"
                name="confirm-password"
                required
              />
            </div>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p className="form-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
