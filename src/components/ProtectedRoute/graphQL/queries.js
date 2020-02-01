import gql from 'graphql-tag';

const CURRENT_USER = gql`
  query getCurrentUser {
    me {
      id
      name
      email
    }
  }
`;

export { CURRENT_USER }
