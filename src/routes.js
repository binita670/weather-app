import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherHome from "./weatherInfo/weatherHome";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <WeatherHome />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
