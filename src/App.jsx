import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/nav";

import Home from "./pages/home";
import WeatherStation from "./pages/weather-station";

function App() {
  return (
    <Router>
      <div>
        <Nav />

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
