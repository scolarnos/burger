import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend Developer who loves transforming ideas into
              responsive, interactive web applications. 
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), HTML5, and CSS3{" "}
                </b>
              </i>
              and I enjoy building scalable user interfaces.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              and exploring component-based architecture and state management.
              <br />
              <br />
              Whenever possible, I love building projects with modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Vite</b> and{" "}
                <b className="purple">Tailwind CSS</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
