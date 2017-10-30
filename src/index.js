import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LandingPage from "./components/containers/LandingPage";
import store from "./store/configureStore";


render(
  <MuiThemeProvider>
    <Provider store={store}>
      <LandingPage />
    </Provider>
  </MuiThemeProvider> , document.getElementById("root"));
