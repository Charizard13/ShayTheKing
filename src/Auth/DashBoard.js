import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/ducks/user";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

export default function DashBoard() {
  const currentUserEmail = useSelector((state) => state.user.email);
  const fireBaseError = useSelector((state) => state.error);

  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState("");
  function handleLogOut() {
    setError("");
    try {
      dispatch(logOut());
      if (fireBaseError.err.length === 0) {
        history.push("/login");
      } else {
        setError(fireBaseError.err);
      }
    } catch {
      setError("Failed to log out");
    }
  }
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
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email: {currentUserEmail && currentUserEmail}</strong>
              <Link
                to="./update-profile"
                className="btn btn-primary w-100 mt-3"
              >
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button
              variant="link"
              onClick={handleLogOut}
              style={{ fontWeight: "bold" }}
            >
              <bold>Log Out</bold>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
