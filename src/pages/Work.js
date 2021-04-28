import React from "react";

function Work() {
  return (
    <div className="section">
      <div id="my-work">
        <h2>
          <strong> My Work</strong>
        </h2>
      </div>
      <div className="info">
        <div className="first-work">
          <h3>
            <strong> Bathroom Buddy</strong>
          </h3>
          <p>Search for and rate restrooms in your area.</p>
          <a href="https://github.com/bhfreeman/restroom-tracker.git">GitHub</a>
          <a href="https://bathroom-buddy-v1.herokuapp.com/">URL</a>
        </div>
        <div className="second-work">
          <h3>
            <strong> Random Password Generator</strong>
          </h3>
          <p>
            Create a random password using alpha-numeric characters and special
            characters.
          </p>
          <a href="https://github.com/spicystephy/Random-Password-Generator.git">
            GitHub
          </a>
          <a href="https://spicystephy.github.io/Random-Password-Generator/">
            URL
          </a>
        </div>
        <div className="third-work">
          <h3>
            <strong> Work Day Scheduler</strong>
          </h3>
          <p>Plan your day, by the hour, and save your to-do's for the day.</p>
          <a href="https://github.com/spicystephy/Work-Day-Scheduler.git">
            GitHub
          </a>
          <a href="https://spicystephy.github.io/Work-Day-Scheduler/">URL</a>
        </div>
      </div>
    </div>
  );
}

export default Work;
