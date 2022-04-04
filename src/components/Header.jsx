import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header d-flex justify-content-center gap-4">
      <span>
        <Link to="/home">Home</Link>
      </span>
      <span>
        <Link to="/reviews">Reviews</Link>
      </span>
      <span>
        <Link to="/dashboard">Dashboard</Link>
      </span>
      <span>
        <Link to="/blogs">Blogs</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
    </header>
  );
};

export default Header;
