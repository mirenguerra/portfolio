import React from "react";
import "./styles.scss";
import Home from "../Home/index";
import Menu from "../Menu/index";
import AboutMe from "../AboutMe/index";
import Projects from "../Projects/index";
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
    const {isClose}=this.state;
    return (
      <div className="App">
        <Menu isClose={isClose} handleToggleClick={this.handleToggleClick} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
