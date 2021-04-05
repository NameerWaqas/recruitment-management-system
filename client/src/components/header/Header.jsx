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
        <Link to="/auth/register" className="link">
          <span className="navButton">Login/Register</span>
        </Link>
      </span>
    </header>
  );
}

export default Header;
