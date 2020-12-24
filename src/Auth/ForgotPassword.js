import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { passwordReset } from "../redux/ducks/user";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ForgotPassword() {
  const fireBaseError = useSelector((state) => state.error);

  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function handlePasswordReset(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      dispatch(passwordReset(emailRef.current.value));
      if (fireBaseError.err.length === 0) {
        setMessage("Check your inbox for further instructions");
      } else {
        setError(fireBaseError.err);
      }
    } catch {
      setError("Failed to sign reset");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center Dark"
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
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handlePasswordReset}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    style={{ backgroundColor: "rgb(209,209,207)" }}
                  />
                </Form.Group>

                <Button disabled={loading} type="submit" className="w-100">
                  Reset Password{" "}
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Login</Link>
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
