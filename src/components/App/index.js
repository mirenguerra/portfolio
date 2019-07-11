import React from "react";
import Home from "../Home/index";
import AboutMe from "../AboutMe/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleToggleClick() {
    this.setState({
      isClose: !this.state.isClose,
    });
  }

  closeNav() {
    this.setState({
      isClose: true,
    });
  }

  render() {
    const { isClose } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => {
            return (
              <Home
                match={routerProps.match}
                isClose={isClose}
                handleToggleClick={this.handleToggleClick}
              />
            );
          }}
        />
        <Route
          path="/aboutme"
          render={routerProps => {
            return (
              <AboutMe match={routerProps.match} closeNav={this.closeNav} />
            );
          }}
        />

        <Route
          path="/projects"
          render={routerProps => {
            return (
              <Projects match={routerProps.match} closeNav={this.closeNav} />
            );
          }}
        />
        <Route
          path="/contact"
          render={routerProps => {
            return (
              <Contact match={routerProps.match} closeNav={this.closeNav} />
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;
