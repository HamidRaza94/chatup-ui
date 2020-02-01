import gql from 'graphql-tag';

const SEND_MESSAGE = gql`
  mutation sendMessage($to: ID!, $message: String!, $createdAt: Date) {
    sendMessage(to: $to, message: $message, createdAt: $createdAt) {
      id
      to
      message
      createdAt
    }
  }
`;

export { SEND_MESSAGE }
