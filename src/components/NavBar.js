import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import ProfilePhoto from "./ProfilePhoto";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null)
    } catch (err) {
      console.log(err)
    }
  }

  const addPostIcon = (
    <NavLink
      exact
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i class="fa-solid fa-pen-nib"></i>
      <span>Create</span>
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i class="fa-solid fa-scroll"></i>
        <span>Feed</span>
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i class="fa-regular fa-heart"></i>
        <span>Liked</span>
      </NavLink>
      <NavLink exact className={styles.NavLink} to="/" onClick={handleSignOut}>
      <i class="fa-solid fa-person-running"></i>
        <span>Sign Out</span>
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <ProfilePhoto
          src={currentUser?.profile_image}
          text="Profile"
          height={40}
        />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Sign In</span>
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i class="fa-solid fa-user-plus"></i>
        <span>Sign Up</span>
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" variant="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              {currentUser ? loggedInIcons : loggedOutIcons}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
