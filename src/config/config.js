const envVars = process.env;

const config = {
  uri: `${envVars.REACT_APP_APOLLO_GRAPHQL_URI}/graphql`,
  subsUri: `${envVars.REACT_APP_APOLLO_SUBSCRIPTION_URI}/graphql`,
}

export default config;
