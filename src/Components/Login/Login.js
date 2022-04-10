import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (user) {
      navigate("/shop");
    }
  };
  return (
    <div className="full-container">
      <div className="form-container">
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSignIn}>
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
            <p style={{ color: "red" }}>{error?.message}</p>
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
