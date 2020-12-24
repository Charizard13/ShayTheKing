// import React, { useState } from "react";
// import { Grid, Paper } from "@material-ui/core";
// import Header from "./Header";
// import TrackerPage from "./Tracker/Page";
// import KeysPage from "./KeyWord/Page";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import DashBoard from "./Auth/DashBoard";

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createMuiTheme({
//     palette: {
//       type: darkMode ? "light" : "dark",
//       primary: {
//         main: "#198AE6",
//       },
//       secondary: {
//         main: "#DE3D2A",
//       },
//       info: {
//         main: "#ebf5ff",
//       },
//     },
//   });
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper
//         style={
//           darkMode
//             ? { backgroundColor: "#b5b5b5" }
//             : { backgroundColor: "#151515" }
//         }
//       >
//         <Grid container direction="column">
//           <Router>
//             <Header
//               setDarkMode={setDarkMode}
//               darkMode={darkMode}
//               theme={theme}
//             ></Header>
//             <Switch>
//               <Route
//                 exact
//                 path="/main/keys"
//                 render={(props) => <KeysPage {...props} />}
//               />
//               <Route
//                 exact
//                 path="/main/tracker"
//                 render={(props) => <TrackerPage {...props} />}
//               />
//               <Route
//                 exact
//                 path="/"
//                 render={(props) => <DashBoard {...props} />}
//               />
//             </Switch>

//             <Grid item xs={0} sm={2} />
//           </Router>
//         </Grid>
//       </Paper>
//     </ThemeProvider>
//   );
// }
