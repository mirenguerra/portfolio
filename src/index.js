import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "../src/components/App/index";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
