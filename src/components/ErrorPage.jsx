import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <Container fluid>
        <Row>
          <Col sm="6" className="mx-auto text-center">
            <h1>404</h1>
            <h3>UH OH! You're lost.</h3>

            <p className="w-50 mx-auto py-3">
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <Link to={"/"}>HOME</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErrorPage;
