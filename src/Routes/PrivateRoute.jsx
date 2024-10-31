import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart.jsx";
import WishList from "../Pages/WishList.jsx";
import Home from "../Pages/Home.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import Layout from "../Layout/Layout.jsx";

function Private() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Private;
