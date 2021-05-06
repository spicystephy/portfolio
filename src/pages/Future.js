import React from "react";
import Container from "../components/Container";

function Future() {
  return (
    <div>
      <Container style={{ marginTop: 150, marginLeft: 80, marginRight:80 }}>
        <p style={{ margin: 50 }}>
          Totonki Tortilla Warmers is a one-of-a-kind business built by my mom.
          She has been selling her homemade tortilla warmers on Etsy and local
          craft fairs. I would love for her to have her very own site where she
          can manage inventory in real time as well as payments.
        </p>

        <p style={{ margin: 50 }}>
          Delilah's Delights will be a site for a friend to sell her homemade
          macarons. Currently she sells through Instagram and would like a
          proper store front of her own.
        </p>

        <p style={{ margin: 50 }}>
          Granillo & Co. will be a site built for a friend so that she can start
          her own businness as a private therapist. This site would ideally
          incorporate a system for potential clients to view and schedule
          appointments.
        </p>

        <p style={{ margin: 50 }}>
          Finally, Rate that Restroom is an idea I had many, many years ago.
          Because of my health issues, I often found myself urgently needing a
          restroom. There were some that were great for noise suppression and
          ventillation, and some that left me feeling embarrased. However, I
          noticed that a lot these restrooms were not what they seemed on the
          outside. Thus, I thought it would be great for people to give a rating
          to a public restroom they visited to inform future pit-stoppers of
          what to expect.
        </p>
        <p style={{ marginLeft:100, marginRight:100, marginBottom:100 }}>
          *Update:* Rate that Restroom has been created and is called Bathroom
          Buddy. Find it under the My Work tab! This project has 3
          collaborators; myself,
          <p>
            <a href="https://github.com/bhfreeman">Brett Freeman</a>
          </p>
          <p>
            <a href="https://github.com/sarahbinaz1020">Sarah Bonnell</a>
          </p>
        </p>
      </Container>
    </div>
  );
}

export default Future;
