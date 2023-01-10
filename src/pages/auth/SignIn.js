import React, { useState } from "react";
import { Alert, Button, Col, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function SignIn() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
      // console.log(err);
    }
  };

  return (
    <Col className="my-auto p-0 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign in</h1>
        <Form className="w-50" onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              value={username}
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert key={idx} variant="danger">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              value={password}
              onChange={handleChange}
              className={styles.Input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="danger">
              {message}
            </Alert>
          ))}

          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign in
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="danger" className="mt-3">
              {message}
            </Alert>
          ))}
        </Form>
      </Container>
      <Container className="mt-3">
        <Link className={styles.Link} to="/signup">
          Don't have an account yet? Click here to sign up
        </Link>
      </Container>
    </Col>
  );
}

export default SignIn;
