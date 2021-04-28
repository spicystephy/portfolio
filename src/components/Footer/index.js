import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div id="contact-me">
        <h2>
          <strong> Contact Me</strong>
        </h2>
        <div className="content has-text-centered">
          <div className="contact-links">
            <div className="icon-text">
              <span>
                <a href="mailto:stephaniemzavala@gmail.com">
                  <span className="icon">
                    <i className="fas fa-envelope-square"></i>
                  </span>
                  Email
                </a>
              </span>
            </div>

            <div className="icon-text">
              <span className="icon">
                <i className="fab fa-github-square"></i>
              </span>
              <span>
                <a href="https://github.com/spicystephy">GitHub</a>
              </span>
            </div>
            <div className="icon-text">
              <span>
                <a href="https://www.linkedin.com/in/stephanie-zavala-172995117">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  Linkedin
                </a>
              </span>
            </div>
            <div className="icon-text">
              <span>
                <a href="https://user-images.githubusercontent.com/77809381/114598503-d0396c00-9c46-11eb-937d-9919f3ee4f77.png">
                  <span className="icon">
                    <i className="far fa-file-alt"></i>
                  </span>
                  Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
