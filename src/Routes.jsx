import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ProtectedRoute, Heading } from './components';
import { Login, Chat, ChatV1 } from './scenes';
import { route } from './config';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={route.login}
        render={(props) => (
          <Fragment>
            <Heading />
            <Login {...props} />
          </Fragment>
        )}
      />

      <Route
        exact
        path={route.chat}
        render={(props) => <ProtectedRoute {...props} component={Chat} />}
      />

      <Route
        exact
        path={route.v1}
        render={() => <ChatV1 />}
      />

      <Redirect to={route.login} />
    </Switch>
  </Router>
)

export default Routes;
