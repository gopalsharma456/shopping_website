import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faL,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const cartState = useSelector((state) => state.cartKey.cart.length);
  const wishlistState = useSelector((state) => {
    return state.wishlistKey.wishlistKey.length;
  });

  useEffect(() => {
    function handleStorage() {
      setIsLoggedIn(!!localStorage.getItem("token"));
    }

    window.addEventListener("tokenUpdated", handleStorage);

    return () => {
      window.removeEventListener("tokenUpdated", handleStorage);
    };
  }, []);

  useEffect(() => {
    const debouncingFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch(searchTerm)
        console.log(searchResult)
      } else {
      }
    }, 1000);
    return () => clearTimeout(debouncingFn);
  }, [searchTerm]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?title=${query}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log("Error fetching result", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Shop-Inn</Link>
        </div>

        {/* <div className="navbar-brand">
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
        </div> */}

        <div className="navbar-links">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-color" />
          </div>

          {isLoggedIn && (
            <>
              <Link to="/cart">Cart({cartState})</Link>
              <Link to="/wishlist">Wishlist({wishlistState})</Link>
            </>
          )}

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
