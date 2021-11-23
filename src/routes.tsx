import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home'));

const Routes = function () {
  return (
    <Router>
      <Switch>
        <Route element={<HomePage />} path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
