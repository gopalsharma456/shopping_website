import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faL,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    function handleStorage() {
      setIsLoggedIn(!!localStorage.getItem("token"));
    }

    window.addEventListener("tokenUpdated", handleStorage);

    return () => {
      window.removeEventListener("tokenUpdated", handleStorage);
    };
  }, []);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
        </div>

        <div className="logo">
          <Link to="/">Logo</Link>
        </div>

        <div className="navbar-links">
          <input type="text" placeholder="Search.." name="search" />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-color" />
          </div>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>

          {!isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/userprofile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
