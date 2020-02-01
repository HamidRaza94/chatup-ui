import gql from 'graphql-tag';

const GET_FRIEND_LIST_WITH_MESSAGES = gql`
  query getFriendListWithMessages {
    getFriendListWithMessages {
      id
      name
      email
      conversations {
        id
        from
        to
        message
        createdAt
      }
    }
  }
`;

export { GET_FRIEND_LIST_WITH_MESSAGES }