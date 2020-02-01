import gql from 'graphql-tag';

const SENT_MESSAGE = gql`
  subscription messageSent {
    messageSent {
      id
      from
      to
      message
      createdAt
    }
  }
`;

export { SENT_MESSAGE }
