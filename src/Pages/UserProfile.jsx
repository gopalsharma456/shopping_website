import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import axios from "axios";
import { useNavigate } from "react-router";

function UserProfile() {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        console.log("profile data", res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="card">
        <img src="img.jpg" alt="John" />
        <h1>Hello {userData ? userData.name : "User"}</h1>
        <p className="title">{userData ? userData.role : ""}</p>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <p>
          <button onClick={handleLogout}>Logout</button>
        </p>
      </div>
    </>
  );
}

export default UserProfile;
