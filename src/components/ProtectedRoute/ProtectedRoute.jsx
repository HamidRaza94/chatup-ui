import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { CURRENT_USER } from './graphQL';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Query query={CURRENT_USER} >
      {({ loading, error, data }) => {
        if (loading) return 'loading';
        if (error) return <Redirect to="/login" />;

        const { me } = data;

        return (
          <Route
            {...rest}
            render={(props) => <Component {...props} user={me} />}
          />
        )
      }}
    </Query>
  )
}

export default ProtectedRoute;
