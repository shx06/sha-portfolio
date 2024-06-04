import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hy.png";
import emotion from "../../Assets/Projects/cp.png";
import editor from "../../Assets/Projects/ms.png";
import chatify from "../../Assets/Projects/darla.png";
import suicide from "../../Assets/Projects/ni.png";
import bitsOfCode from "../../Assets/Projects/oned.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Darla"
              description="Drala is a special cryptocurrency designed for use exclusively within specific private spaces like churches. It runs on a secure website built with MongoDB, Express.js, React, and Node.js. Transactions and interactions within this closed system are safe and confidential."
              demoLink="https://darla.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OneDot"
              description="OneDot Is a Logistic Booking Website. Technology Used In Onedot are Wordpress,Javascript,HTML,CSSOnedot.live is the official website for a logistics company, showcasing its comprehensive logistics solutions and services. Designed with WordPress and developed using JavaScript, PHP, HTML, and CSS, the website offers a user-friendly interface for customers to explore and interact with the company's offerings"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://onedot.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Medicine Stockist"
              description="As a Full Stack Developer, I was part of a team that built Medicine Stockist, a comprehensive pharmacy management application. Utilizing tools such as React, Bootstrap, SCSS, Stripe, Express, TypeScript, MongoDB, Azure Blob, OpenAI API, Replicate AI, Cronjob, and JWT, we created a solution that streamlines pharmacy operations."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.sts.medicinestockmanagement&hl=en_IN&gl=US"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Nashbud"
              description="As a Full Stack Developer, I contributed to the development of Nashbud, a secure platform designed for genuine connections based on shared interests and passions. Using tools like NextJS, MongoDB, Express, React, and NodeJS, we created an environment where users can connect authentically and privately."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://play.google.com/store/apps/details?id=com.NashBud3.nashbud&hl=en_IN&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="NioPractice"
              description="NIOPractice is an AI-powered educational app tailored specifically for JEE aspirants. Our mission is to help students enhance their speed and accuracy in mathematics, a crucial subject for excelling in competitive exams like JEE."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://play.google.com/store/apps/details?id=com.niopractice.prodMob&hl=en_US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Catalog Maker Pro : Online"
              description="Catalog Maker Pro is a versatile online app with multi-device support that enables you to create professional product catalogues (catalogs) directly from your phone. Effortlessly design and share catalogues with your customers in just minutes, making it convenient to manage and promote your products on the go."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://play.google.com/store/apps/details?id=com.asharinfotech.catalogmakerpro"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
