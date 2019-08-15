import React, { Component } from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import Card from "../components/Card";
// import Container from "../about"

function About() {
  return (
    <div className="about-grid">
        <h1>About Us</h1>
     
      <div className="container" style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
            At the Teal Canvas we have one primary mission: to serve artists of the creative variety, 
            through connecting them and their artistry to various communities and outreach opportunities. 
            We accomplish this mission by offering high caliber art exhibits/exhibitions, by supporting 
            the development of local and regional artists and creating fun, interactive and educationally 
            informative projects.
            </p>
            <p>
            The Teal Canvas team emphasizes the visual medium of 2D images, digital imagery and photographic 
            art and the opportunity for every individual to participate in the art gallery experience of displaying 
            and selling their work in a unique way.
            </p>
            <p>
            We accomplish this while reaching many hoops would otherwise never experience artistic originality and the 
            joy expressive innovation can bring to a community.We reach and service communities and their talent in a way 
            that bridges the gap and displays oneness and artistry in an exciting new way. 
            </p>
            <p>Join us as we spread light and creativity through the ingenuity of original ideas.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}



export default About;
  // when importin g "lamnding.js" the state