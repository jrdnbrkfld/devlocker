import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Buttons.module.css";

const SignUp = () => {
  return (
    <Col className="my-auto py-2 p-md-2">
      <Container className={`${appStyles.Content} p-4 `}>
        <h1 className={styles.Header}>sign up</h1>

        <Form>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Enter a username"
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              className={styles.Input}
              type="password"
              placeholder="Enter your password"
              name="password1"
            />
          </Form.Group>

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <Form.Control
              className={styles.Input}
              type="password"
              placeholder="Confirm password"
              name="password2"
            />
          </Form.Group>

          <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
      <Container className="mt-3">
        <Link className={styles.Link} to="/signin">
          Already have an account? Sign in
        </Link>
      </Container>
    </Col>
  );
};

export default SignUp;
