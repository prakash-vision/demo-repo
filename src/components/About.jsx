import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="6" className="mx-auto text-center home-page">
            <h1>ABOUT PAGE DESIGN</h1>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
