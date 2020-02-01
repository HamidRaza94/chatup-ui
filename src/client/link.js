import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-client-preset';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import Cookies from 'js-cookie'

import { config } from '../config';

const { uri, subsUri } = config;

const getToken = () => {
  const token = Cookies.get('accessToken');
  console.log('token ===>', token);

  if (token) {
    return `Bearer ${token}`;
  }

  return '';
}

const httpLink = new HttpLink({ uri });

const wsLink = new WebSocketLink({
  uri: subsUri,
  options: {
    reconnect: true,
    connectionParams: () => ({
      authorization: getToken(),
    }),
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },  
  wsLink,
  httpLink,
);

const authLink = setContext(async (_, { headers }) => ({
  headers: {
    ...headers,
    authorization: getToken(),
  },
}));

export default authLink.concat(link);
