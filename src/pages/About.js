import React from "react";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 150 }}>
      <div className="container is-fluid">
        <p>
          Stephanie became part of the U.S. Marine Corps in 2003. Upon being
          medically retired for stage III colon cancer, she began to research
          cancer and realized that there was a strong relationship between some
          cancers and food. After finishing with chemotherapy, she moved back
          home to pursue more knowledge in nutrition. She graduated from the
          University of Arizona with a B.S. in Nutritional Sciences and a minor
          in chemistry. She has worked several years teaching classes and
          providing coaching for people who wanted to make changes for the
          betterment of their health.
        </p>
        <p>
          Currently attending a 12 week course that covers the full-stack
          curriculum. Please check back for updates for realized
          projects.
        </p>
        <p>
          Contact me through the links at the bottom of the page.
        </p>
      </div>
      </Container>
    </div>
  );
}

export default About;
