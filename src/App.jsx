import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import LabelBottomNavigation from "./components/bottom-navigation";

import Home from "./pages/home";
import WeatherStation from "./pages/weather-station";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/weather-station">
            <WeatherStation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <LabelBottomNavigation />
    </Router>
  );
}

export default App;
