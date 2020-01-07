import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './scenes';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Dashboard />}
      />
    </Switch>
  </Router>
)

export default Routes;
