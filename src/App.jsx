import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import AppBarTop from "./components/app-bar-top";

import Home from "./pages/home";
import WeatherStation from "./pages/weather-station";

function App() {
  return (
    <Router>
      <div>
        <AppBarTop />

        <Switch>
          <Route path="/weather-station">
            <WeatherStation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
