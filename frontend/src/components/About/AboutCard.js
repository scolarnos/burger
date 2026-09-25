import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mayur Humbre</span>{" "}
            from <span className="purple">Kalyan, Maharashtra</span>.
            <br />
            I’m a passionate <span className="purple">Frontend Developer</span>.
            <br />I am currently pursuing my{" "}
            <span className="purple">BSc in Computer Science</span> from{" "}
            <span className="purple">L.D. Sonawane College</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mayur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
