import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Row,
  Col,
  Container,
} from "reactstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink as NavigationLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cart = useSelector((store) => store.myStore.cart);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar expand="md" className="bg-transparent">
            <NavbarBrand className="fw-bold text-white">MERI DUKAN</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto gap-5" navbar>
                <NavItem>
                  <NavigationLink to={"/"} className="nav-link text-white">
                    Home
                  </NavigationLink>
                </NavItem>
                <NavItem>
                  <NavigationLink to={"/about"} className="nav-link text-white">
                    About
                  </NavigationLink>
                </NavItem>

                <NavItem>
                  <NavigationLink
                    to={"/contact"}
                    className="nav-link text-white"
                  >
                    Contact
                  </NavigationLink>
                </NavItem>

                <NavItem>
                  <NavigationLink
                    to={"/product"}
                    className="nav-link text-white"
                  >
                    Product
                  </NavigationLink>
                </NavItem>
              </Nav>

              <NavbarText className="text-white cursor-pointer position-relative">
                <Link to={"/cart"}>
                  <FaCartShopping size={20} color="white" className=" ms-2" />
                  <span className="position-absolute cart-count text-white">
                    {cart.length}
                  </span>
                </Link>
              </NavbarText>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarComponent;
