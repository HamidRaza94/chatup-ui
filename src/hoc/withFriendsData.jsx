import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { GET_FRIEND_LIST_WITH_MESSAGES, SENT_MESSAGE } from './graphQL';

const withFriendsData = (WrappedComponent) => {
  const wrapper = (props) => (
    <Query query={GET_FRIEND_LIST_WITH_MESSAGES}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return 'loading';
        if (error) return error;

        const { getFriendListWithMessages } = data;

        return (
          <WrappedComponent
            {...props}
            friendsData={getFriendListWithMessages}
            subscribeToNewMessage={() => subscribeToMore({
              document: SENT_MESSAGE,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const newMessage = subscriptionData.data.messageSent;

                const newly = prev.getFriendListWithMessages.map((friendWithMessages) => {
                  if (friendWithMessages.id === newMessage.from) {
                    return {
                      ...friendWithMessages,
                      conversations: [
                        ...friendWithMessages.conversations,
                        newMessage,
                      ],
                    };
                  }

                  return friendWithMessages;
                });
                
                return Object.assign({}, prev, {
                  getFriendListWithMessages: [
                    ...newly,
                  ],
                });
              }
            })}
          />
        )
      }}
    </Query>
  )

  return wrapper;
};

withFriendsData.propTypes = {
  WrappedComponent: PropTypes.element.isRequired,
};

export default withFriendsData;
