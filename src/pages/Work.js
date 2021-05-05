import React from "react";
import Container from "../components/Container";
import bathroom_buddy from "../images/bathroom_buddy.png";
import scheduler from "../images/scheduler.png";
import weather from "../images/weather.png";

function Work() {
  return (
    <div className="section">
      <Container style={{ marginTop: 150 }}>
        <div id="my-work"></div>
        <div className="info">
          <div className="first-work">
            <h3>
              <strong> Bathroom Buddy</strong>
            </h3>
            <p>Search for and rate restrooms in your area.</p>
            <figure className="image">
              <img
                className="image"
                src={bathroom_buddy}
                style={{width:640, height:400}}
                border="3px"
                id="profile"
                alt="Screenshot of bathroom buddy app."
              />
            </figure>
            <div>
              <a href="https://github.com/bhfreeman/restroom-tracker.git">
                GitHub
              </a>
            </div>
            <a href="https://bathroom-buddy-v1.herokuapp.com/">URL</a>
          </div>
          <div className="second-work">
            <h3>
              <strong> Weather You Like It</strong>
            </h3>
            <p>
              An app for checking current weather and future forecast. Please note, this app is under construction to be reworked as an app for preschoolers to learn about the weather.
            </p>
            <figure className="image">
              <img
                className="has-ratio" width="640" height="360"
                src={weather}
                style={{width:640, height:500}}
                border="3px"
                id="profile"
                alt="Screenshot of weather dashboard app."
              />
            </figure>
            <div>
              <a href="https://github.com/spicystephy/Weather-Dashboard">
                GitHub
              </a>
            </div>
            <a href="https://spicystephy.github.io/Weather-Dashboard/">
              URL
            </a>
          </div>
          <div className="third-work">
            <h3>
              <strong> Work Day Scheduler</strong>
            </h3>
            <p>
              Plan your day, by the hour, and save your to-do's for the day.
            </p>
            <figure className="image">
              <img
                className="image"
                style={{width:640, height:500}}
                src={scheduler}
                border="3px"
                id="profile"
                alt="Screenshot of workday scheduler app."
              />
            </figure>
            <div>
              <a href="https://github.com/spicystephy/Work-Day-Scheduler.git">
                GitHub
              </a>
            </div>
            <a href="https://spicystephy.github.io/Work-Day-Scheduler/">URL</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
