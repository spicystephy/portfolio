import React from "react";
import Container from "../components/Container";
import bathroom_buddy from "../images/bathroom_buddy.png";
import scheduler from "../images/scheduler.png";
import weather from "../images/weather.png";

function Work() {
  return (
    <div className="content">
      <Container>
        {/* <div id="my-work"></div> */}
        <div className="content" style={{marginTop:15}}>
          <div className="first-work">
            <h3>
              <strong> Bathroom Buddy</strong>
            </h3>
            <p style={{ marginRight:150 }}>
              Search for and rate restrooms in your area. IBS rearing its head?
              Kids suddenly need to go? Looking for a pit stop between
              deliveries? Look for bathrooms with our app. If the app doesn't
              have a bathroom, please create one for us so others can find it.
            </p>
            <figure className="image">
              <img
                className="image"
                src={bathroom_buddy}
                style={{width:285, height:245, marginRight:180}}
                border="3px"
                id="profile"
                alt="Screenshot of bathroom buddy app."
              />
            </figure>
            <div>
              <a
                style={{ padding: 30 }}
                href="https://github.com/bhfreeman/restroom-tracker.git"
              >
                GitHub
              </a>

              <a href="https://bathroom-buddy-v1.herokuapp.com/">URL</a>
            </div>
          </div>
          <div className="second-work" style={{ marginRight:60, marginLeft:10}}>
            <h3>
              <strong> Weather You Like It</strong>
            </h3>
            <p>
              An app for checking current weather and future forecast. Please
              note, this app is under construction to be reworked as an app for
              preschoolers to learn about the weather.
            </p>
            <figure className="image">
              <img
                className="image"
                src={weather}
                // style={{width:640, height:500}}
                border="3px"
                id="profile"
                alt="Screenshot of weather dashboard app."
              />
            </figure>
            <div>
              <a
                style={{ padding: 30 }}
                href="https://github.com/spicystephy/Weather-Dashboard"
              >
                GitHub
              </a>
              <a href="https://spicystephy.github.io/Weather-Dashboard/">URL</a>
            </div>
          </div>
          <div className="third-work" style={{ marginLeft:70 }}>
            <h3 >
              <strong> Work Day Scheduler</strong>
            </h3>
            <p>
              Plan your day, by the hour, and save your to-do's for the day. Type in the text box your list with or without time stamps. Click save to refer to what you've done or need to do.
            </p>
            <figure className="image">
              <img
                className="image"
                // style={{width:640, height:500}}
                src={scheduler}
                border="3px"
                id="profile"
                alt="Screenshot of workday scheduler app."
              />
            </figure>
            <div>
              <a
                style={{ padding: 30 }}
                href="https://github.com/spicystephy/Work-Day-Scheduler.git"
              >
                GitHub
              </a>
              <a href="https://spicystephy.github.io/Work-Day-Scheduler/">
                URL
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>

    /* <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={bathroom_buddy} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
    </div>

    <div className="content">
    Search for and rate restrooms in your area. IBS rearing its head? Kids suddenly need to go? Looking for a pit stop between deliveries? Look for bathrooms with our app. If the app doesn't have a bathroom, please create one for us so others can find it. 
      <a href="https://github.com/bhfreeman/restroom-tracker.git">GitHub</a>
      <a href="https://bathroom-buddy-v1.herokuapp.com/">Deployed</a>
      <br/>
      
    </div>
  </div>
</div> */
  );
}

export default Work;
