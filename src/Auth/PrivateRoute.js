import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user, loading, error] = useAuthState(auth);
  if (error) {
    return <div>Sorry there was an error...</div>;
  } else {
    return loading ? (
      <div>loading...</div>
    ) : (
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      ></Route>
    );
  }
}
