import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, WeatherStation, Settings, PageNotFound } from '../pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/weather-station">
        <WeatherStation />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Router;
