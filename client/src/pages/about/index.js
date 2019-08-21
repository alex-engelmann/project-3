import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Link } from "react-router-dom";
import jo2 from "../../assets/jo2.jpg";
import jim from "../../assets/jim.jpg";
import alex from "../../assets/alex.jpg";
import liam from "../../assets/liam.jpg";
import PageTitle from "../../components/Title";
import "./index.css";
// import Card from "../components/Card";
// import Container from "../about"

function About() {
  return (
    <div className="about-wrapper">
      <PageTitle title="About Us" />
      <div className="about-grid">

        <div className="about-container" style={{ marginTop: 30 }}>
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

        {/* here is the team data */}

        <div className="container">

          <div className="row">

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={jo2} />
                </div>
                <div className="team-content">
                  <h3 className="name">Johanna Casimir-Mahoney</h3>
                  <h4 className="title">Software Developer</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link"href="https://github.com/JohannaCasimirMahoney" target="_blank" className="fab fa-github"></a></li>
                  <li><a className="social-link" href="https://www.linkedin.com/in/johannacasimirmahoney" target="_blank" className="fab fa-linkedin"></a></li>
                  <li><a className="social-link" href="mailto:johannamahoney87@gmail" target="_blank" className="fab fa-dribbble"></a></li>
                </ul>
              </div>
            </div>



            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={jim} />
                </div>
                <div className="team-content">
                  <h3 className="name">James Tatarakis</h3>
                  <h4 className="title">Software Developer</h4>
                </div>
                <ul className="social">
                  <li> <a className="social-link" href="https://github.com/JimTatarakis" target="_blank" className="fab fa-github"></a></li>
                  <li><a className="social-link" href="https://www.linkedin.com/in/james-tatarakis-9a595394/" target="_blank" className="fab fa-linkedin"></a></li>
                  <li><a className="social-link" href="mailto:jimtatarakis@gmail.com" target="_blank" className="fab fa-dribbble"></a></li>
                </ul>
              </div>
            </div>



            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={alex} />
                </div>
                <div className="team-content">
                  <h3 className="name">Alex Engelmann</h3>
                  <h4 className="title">Software Developer</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link" href="https://github.com/alex-engelmann" target="_blank"className="fab fa-github"></a></li>
                  <li><a className="social-link" href="https://www.linkedin.com/in/alex-engelmann/" target="_blank" className="fab fa-linkedin"></a></li>
                  <li><a className="social-link" href="mailto:alex.engelmann@gmail.com" target="_blank" className="fab fa-dribbble"></a></li>
                </ul>
              </div>
            </div>


            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={liam} />
                </div>
                <div className="team-content">
                  <h3 className="name">Liam Hartigan</h3>
                  <h4 className="title">Software Developer</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link" href="https://github.com/VanillaCoder" target="_blank" className="fab fa-github"></a></li>
                  <li><a className="social-link" href="https://www.linkedin.com/in/liam-hartigan-581ab9176/" target="_blank" className="fab fa-linkedin"></a></li>
                  <li><a className="social-link" href="mailto:liamhearts@gmail.com" target="_blank" className="fab fa-dribbble"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}





export default About;
