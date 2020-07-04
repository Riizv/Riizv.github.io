import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.scss";

import LabelBottomNavigation from "./components/bottom-navigation";

import Home from "./pages/home";
import WeatherStation from "./pages/weather-station";

import { theme } from "./config/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
