import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="d-flex justify-content-center gap-4">
        <span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Home
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Reviews
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Dashboard
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Blogs
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            About
          </NavLink>
        </span>
      </nav>
    </header>
  );
};

export default Header;
