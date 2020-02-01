import gql from 'graphql-tag';

const CHECK_USER = gql`
  query checkUser($email: String!, $password: String!) {
    checkUser(email: $email, password: $password)
  }
`;

export { CHECK_USER }
