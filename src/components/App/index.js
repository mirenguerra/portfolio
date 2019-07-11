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
  }

  handleToggleClick() {
    this.setState({
      isClose: !this.state.isClose,
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
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;
