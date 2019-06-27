import React from "react";
import "./styles.scss";
import Home from "../Home/index";
import Menu from "../Menu/index";
import AboutMe from "../AboutMe/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
