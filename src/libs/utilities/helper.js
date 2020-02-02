const parseGQLError = (error) => {
  let errorMessage = '';
  const { graphQLErrors, networkError } = JSON.parse(JSON.stringify(error));

  if (networkError) {
    networkError.result.errors.forEach(({ message }) => errorMessage += message);
    return errorMessage;
  }

  const serviceDown = graphQLErrors.find(({ extensions: { code } }) => code === 'INTERNAL_SERVER_ERROR');

  if (serviceDown || networkError) {
    errorMessage = networkError ? 'Upstream Server Unavailable' : 'Service Unavailable';
    return errorMessage;
  }

  graphQLErrors.forEach(({ message }) => errorMessage += message);
  return errorMessage;
}

export {
  parseGQLError,
}
