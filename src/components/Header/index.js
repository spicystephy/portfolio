import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import selfie from "../../images/selfie.jpeg"

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <figure className="image is-64x64">
        <img 
          className="selfie is-rounded"
          src={selfie}
          id="profile"
          alt="Stephanie Zavala"
        />
      </figure>
      <div className="navbar-menu">
        <div className="navbar-end has-navbar-fixed-top">
          <Link
            className="navbar-item"
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            <strong>About Me</strong>
          </Link>
          <Link
            className="navbar-item"
            to="/work"
            className={
              window.location.pathname === "/work"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            <strong>My Work</strong>
          </Link>
          <Link
            className="navbar-item"
            to="/future"
            className={
              window.location.pathname === "/future"
                ? "navbar-item is-active"
                : "navbar-item"
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
