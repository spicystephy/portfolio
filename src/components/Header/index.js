import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import selfie from "../../images/selfie.jpeg"

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <figure className="image is-96x96">
        <img 
          className="selfie is-rounded"
          src={selfie}
          id="profile"
          alt="Stephanie Zavala"
        />
      </figure>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
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
