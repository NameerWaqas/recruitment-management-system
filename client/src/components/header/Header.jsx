import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h3 id="title">RMS</h3>
      </Link>
      <span>
        {localStorage.getItem("jwt") ? (
          <Link to="/dashboard/user" className="link">
            <span className="navButton">Dashboard</span>
          </Link>
        ) : (
          <Link to="/auth/login" className="link">
            <span className="navButton">Login/Register</span>
          </Link>
        )}
      </span>
    </header>
  );
}

export default Header;
