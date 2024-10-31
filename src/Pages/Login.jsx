import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        window.dispatchEvent(new Event("tokenUpdated"));
        alert("login successful");
        navigate("/")
        
      })
      .catch((err) => {
        alert("login failed", err);
      });
  }




  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          className="input-style"
          placeholder="Enter Your Email ID..."
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="input-style"
          placeholder="Enter Your Password..."
        />
        <button onClick={handleSubmit} className="submit-btn">
          Login
        </button>
        <p>
          Don't have account <Link to="/signup">Create New</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
