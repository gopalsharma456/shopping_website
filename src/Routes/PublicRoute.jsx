import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx";
import Home from "../Pages/Home.jsx";
import Layout from "../Layout/Layout.jsx";

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Public;
