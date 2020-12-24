import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/ducks/user";
import { Link, useHistory } from "react-router-dom";

import { updateEmail } from "../redux/ducks/user";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function UpdateProfile() {
  const currentUserEmail = useSelector((state) => state.user.email);
  const fireBaseError = useSelector((state) => state.error);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUserEmail) {
      promises.push(dispatch(updateEmail(emailRef.current.value)));
    }
    if (fireBaseError.err.length === 0) {
      if (passwordRef.current.value) {
        promises.push(dispatch(updatePassword(passwordRef.current.value)));
      }
    } else {
      setError(fireBaseError.err);
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", color: "black" }}
      >
        <div
          className="w-100"
          style={{
            maxWidth: "800px",
            color: "black",
          }}
        >
          {" "}
          <Card bg="dark" text="light">
            <Card.Body>
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSignUp}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUserEmail}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    bg="dark"
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>password Confirm</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">
                  Update{" "}
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              <Link to="/">Cancel</Link>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}
