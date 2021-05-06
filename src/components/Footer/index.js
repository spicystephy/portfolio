import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer  is-fixed-bottom">
      {/* <div id="contact-me"> */}
      <div className="content">
        {/* <div className="content" style={{width:"100%", flexDirection:""}}> */}
        {/* <div className="flex-icon"> */}
        {/* <div className="contact-links"> */}
        <div className="icon-text">
          <span>
            <a href="mailto:stephaniemzavala@gmail.com">
              <span className="icon">
                <i className="fas fa-envelope-square fa-3x"></i>
              </span>
            </a>
          </span>
        </div>

        <div className="icon-text">
          <span>
            <a href="https://github.com/spicystephy">
              <span className="icon">
                <i className="fab fa-github-square fa-3x"></i>
              </span>
            </a>
          </span>
        </div>
        <div className="icon-text">
          <span>
            <a href="https://www.linkedin.com/in/stephanie-zavala-172995117">
              <span className="icon">
                <i className="fab fa-linkedin fa-3x"></i>
              </span>
            </a>
          </span>
        </div>
        <div className="icon-text">
          <span>
            <a href="https://user-images.githubusercontent.com/77809381/114598503-d0396c00-9c46-11eb-937d-9919f3ee4f77.png">
              <span className="icon">
                <i className="far fa-file-alt fa-3x"></i>
              </span>
            </a>
          </span>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Footer;
