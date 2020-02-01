import React from 'react';
import { PropTypes } from 'prop-types';

import { NotFound, NotFoundList } from './Components';

const Error = ({ error }) => {
  const { graphQLErrors, networkError } = JSON.parse(JSON.stringify(error));
  console.log(networkError);
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    return (
      <NotFoundList errors={networkError.result.errors.map(({ message }) => (message))} />
    )
  }
  const serviceDown = graphQLErrors.find(({ extensions: { code } }) => code === 'INTERNAL_SERVER_ERROR');
  if (serviceDown || networkError) {
    return (
      <NotFound code="503" message={networkError ? 'Upstream Server Unavailable' : 'Service Unavailable'} />
    );
  }
  return (
    <NotFoundList errors={graphQLErrors.map(({ message }) => (message))} />
  )
};

Error.defaultProps = {
  error: {
    graphQLErrors: [{ message: 'something went wrong!' }],
    networkError: null,
  },
}

Error.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
}

export default Error;
