import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, SetError] = useState("");

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
          <h1>Login</h1>
          <form>
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
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p className="form-link">
            New to Ema-john? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
