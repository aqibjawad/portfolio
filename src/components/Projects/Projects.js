import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


import Particle from "../Particle";
import Mas from "../../Assets/mas.png";
import Citybook from "../../Assets/citybook.png";
import Saifullah from "../../Assets/saifullah.png";

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
            <Card className="project-card-view">
              <Card.Img variant="top" src={Mas} alt="card-img" />
              <Card.Body>
                <Card.Title> My Auction Sheet </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  We are the pioneer in this Business. My auction sheet is the 1st biggest website, 
                  with 1 million website visits each month. Through the evaluation of our digital platform and our innovative data 
                  products, we make the process of buying the Auction Sheet easier for customers
                </Card.Text>
                <Button variant="primary" href='https://myauctionsheet.com/' target="_blank">
                  <CgWebsite /> &nbsp;
                    Website
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={Citybook} alt="card-img" />
              <Card.Body>
                <Card.Title> City Book </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  We welcome you to citybook.pk. We are a business listing and event submission company located in Lahore. 
                  We connect you to the businesses and events across Pakistan for free. We’ve been around in one form or another for more 
                  than 5 years, always with one goal in mind — helping local businesses compete and win.
                </Card.Text>
                <Button variant="primary" href='https://citybook.pk/' target="_blank">
                  <CgWebsite /> &nbsp;
                    Website
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={Saifullah} alt="card-img" />
              <Card.Body>
                <Card.Title> Saifullah Properties </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Saifullah properties were established in 2014. This establishment was formed keeping in mind the growing desires of the 
                  people and the demand to owe own house. No one better than us could have captured the dreams and requirements of the 
                  people.
                </Card.Text>
                <Button variant="primary" href='https://github.com/aqibjawad/saifullahproperties' target="_blank">
                  <BsGithub /> &nbsp;
                    GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
