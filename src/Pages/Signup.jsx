import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { API_ENDPOINTS } from "../shared/constants";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const payload = { name, email, password };

    try {
      const res = await axios.post(API_ENDPOINTS.signupApi, payload);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      setError(<h1>Registration failed. Please try again.</h1>);
      console.error("Signup error:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="container">
          <h1>Signup</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-style"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            type="password"
            name="password"
            placeholder="Choose Your Password"
            required
          />
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
          {error && <p className="error-msg">{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
