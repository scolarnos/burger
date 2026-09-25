import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import bombayBurger from "../../Assets/Projects/bombayBurger.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bombayBurger}
              isBlog={false}
              title="Bombay Burger Web Application"
              description="Developed a responsive and dynamic web application for Bombay Burger using React.js, Vite, and Tailwind CSS. Features smooth Framer Motion animations, interactive custom cursor, categorised digital menu with images, and location/contact integration."
              ghLink="https://github.com/mayurhumbre06"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GitHub User Search Application"
              description="Built a responsive single-page application (SPA) that fetches and displays GitHub user profiles using the GitHub REST API via the Fetch API. Implemented real-time search functionality with dynamic conditional rendering to handle loading, error, and empty states. Designed a fully responsive UI using Tailwind CSS utility classes."
              ghLink="https://github.com/mayurhumbre06"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Todo Application (CRUD)"
              description="Built a full CRUD Todo application supporting task creation, editing, deletion, and completion toggle. Implemented persistent data storage using browser localStorage with lazy state initialization. Created reusable, modular components (TodoItem, TodoList, AddTodo) to maintain a clean and scalable component tree."
              ghLink="https://github.com/mayurhumbre06"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
