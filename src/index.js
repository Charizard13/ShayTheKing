import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import MiddleMan from "./middleMan";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MiddleMan />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
