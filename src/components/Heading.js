import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark">
      <Container>
        <NavbarBrand>My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link color="primary" className="btn btn-primary" to={"/add"}>
              Add user
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
