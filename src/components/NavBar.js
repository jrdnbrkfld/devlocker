import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar}expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand>DevLocker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link href="#home"><i class="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link>
            <Nav.Link><i class="fa-solid fa-pen-nib"></i>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
