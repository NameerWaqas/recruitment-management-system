import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h3 id="title">Middleware</h3>
      </Link>
    </header>
  );
}

export default Header;
