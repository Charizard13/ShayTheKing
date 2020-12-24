import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/ducks/user";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
  const fireBaseError = useSelector((state) => state.error);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      dispatch(login(emailRef.current.value, passwordRef.current.value));
      if (fireBaseError.err.length === 0) {
        history.push("/main/keys");
      } else {
        setError(fireBaseError.err);
      }
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
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
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">
                  Log In{" "}
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Need an account ? <Link to="./signup">Sign Up</Link>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}
