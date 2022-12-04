import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <span>DevLocker</span>
        </Navbar.Brand>
        <Navbar.Toggle
          class="custom-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i class="fa-solid fa-right-to-bracket"></i>
              <span>Sign In</span>
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-user-plus"></i>
              <span>Sign Up</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
