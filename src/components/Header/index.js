import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <figure className="image is-96x96">
        <img
          className="is-rounded navbar-item"
          src="./Assets/IMG_1432.jpeg"
          id="profile"
          alt="Stephanie Zavala"
        />
      </figure>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <strong>About Me</strong>
          </Link>
          <Link
            className="navbar-item"
            to="/work"
            className={
              window.location.pathname === "/work"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <strong>My Work</strong>
          </Link>
          <Link
            className="navbar-item"
            to="/future"
            className={
              window.location.pathname === "/future"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <strong> Future Projects</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
