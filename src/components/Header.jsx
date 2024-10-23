import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
        </div>

        <div className="logo">Logo</div>

        <div className="navbar-links">
          <input type="text" placeholder="Search.." />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-color" />
          </div>
          <a>Cart</a>
          <a>Wishlist</a>
          <a>Account</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
