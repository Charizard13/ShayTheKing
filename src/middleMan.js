import React, { useEffect, useState } from "react";
import SignUp from "./Auth/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Auth/DashBoard";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import ForgotPassword from "./Auth/ForgotPassword";
import UpdateProfile from "./Auth/UpdateProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/ducks/user";
import { setCurrentList, getUserData } from "./redux/ducks/keywords";
import Snackbar from "./Snackbar.jsx";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Header from "./Header";
import TrackerPage from "./Tracker/Page";
import KeysPage from "./KeyWord/Page";

const currencies = [
  {
    title: "",
    words: [],
  },
  {
    title: "Ev",
    words: ["tesla", "nio", "xpev"],
  },
  {
    title: "banking",
    words: ["jp", "detuch", "dicount"],
  },
  {
    title: "pahrma",
    words: ["clalit", "maccabi", "teva"],
  },
  {
    title: "tech",
    words: ["apple", "google", "microsoft"],
  },
];
export default function MiddleMan() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "light" : "dark",
      primary: {
        main: "#198AE6",
      },
      secondary: {
        main: "#DE3D2A",
      },
      info: {
        main: "#ebf5ff",
      },
    },
  });
  const [user, loading, error] = useAuthState(auth);
  const result = user ? user.email : null;

  const dispatch = useDispatch();
  useEffect(() => {
    if (loading) {
    } else {
      dispatch(currentUser(result));
      // dispatch(getUserData(result));
    }
  }, [loading, result, dispatch]);

  dispatch(setCurrentList(currencies));
  if (error) {
    return <div>Sorry there was an error...</div>;
  } else {
    return loading ? (
      <div>loading...</div>
    ) : (
      <>
        <ThemeProvider theme={theme}>
          <Snackbar />
          <Paper
            style={
              darkMode
                ? { backgroundColor: "#b5b5b5" }
                : { backgroundColor: "#151515" }
            }
          >
            <Grid container direction="column">
              <Router>
                <Header
                  setDarkMode={setDarkMode}
                  darkMode={darkMode}
                  theme={theme}
                ></Header>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/"
                    component={DashBoard}
                  ></PrivateRoute>
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  ></PrivateRoute>
                  <Route path="/signup" component={SignUp}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route
                    path="/forgot-password"
                    component={ForgotPassword}
                  ></Route>
                  <PrivateRoute
                    path="/main/keys"
                    component={KeysPage}
                  ></PrivateRoute>
                  <PrivateRoute
                    path="/main/tracker"
                    component={TrackerPage}
                  ></PrivateRoute>
                </Switch>
              </Router>
            </Grid>
          </Paper>
        </ThemeProvider>
      </>
    );
  }
}
