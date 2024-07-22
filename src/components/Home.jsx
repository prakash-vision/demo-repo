import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import getProduct from "../services/Product/getProduct";

const Home = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="12" md="6" className="mx-auto text-center home-page">
            <h1 className="text-transparent">HOME PAGE DESIGNB</h1>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              ducimus laudantium, iusto ad libero voluptas architecto vero nisi
              consequuntur sapiente delectus accusantium cum, praesentium
              recusandae perferendis. Asperiores laborum perspiciatis modi?
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
