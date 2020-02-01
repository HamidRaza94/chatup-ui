import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Grid, Box } from '@material-ui/core';

import { Header } from '../../components';
import { FriendListWindow, ConversationWindow } from './components';
import useStyles from './styles';
import { withFriendsData } from '../../hoc';
import { SEND_MESSAGE } from './graphQL';

const Chat = ({ user, friendsData, history, subscribeToNewMessage }) => {
  const classes = useStyles();
  const [selectedFriend, setSelectedFriend] = useState(friendsData[0].id);
  const [friends, setFriends] = useState(friendsData);

  const getSelectedFriendsMessages = () => (
    friends.map(({ id, conversations }) => {
      if (id === selectedFriend) {
        return conversations;
      }
    }).filter(conversation => conversation).flat()
  );

  useEffect(() => {
    subscribeToNewMessage();
  }, []);

  useEffect(() => {
    setFriends(friendsData);
  });

  const sendMessage = (mutationCall) => (message) => {
    const currentDate = new Date().toUTCString();
    const updatedFriendList = [ ...friends ];

    const index = friends.findIndex((friend) => friend.id === selectedFriend);

    const variables = {
      to: selectedFriend,
      message,
      createdAt: currentDate,
    }

    const messageContent = {
      ...variables,
      id: '',
      from: user.id,
      createdAt: '',
    }

    updatedFriendList[index].conversations.push(messageContent);
    const conversationIndex = updatedFriendList[index].conversations.length - 1;

    setFriends(updatedFriendList);

    mutationCall({ variables })
    .then((res) => {
      const x = [...friends];
      x[index].conversations[conversationIndex] = res.data.sendMessage;
      x[index].conversations[conversationIndex].from = user.id;
      setFriends(x);
    })
    .catch(() => {
      const x = [...friends];
      x[index].conversations.splice(conversationIndex, 1);
      setFriends(x);
    })
  }

  return (
    <Mutation mutation={SEND_MESSAGE}>
      {(mutation) => (
        <Box>
          <Header history={history} />
          <Grid container className={classes.root}>
            <Grid item className={classes.conversationListBox}>
              <FriendListWindow
                user={user}
                friends={friends}
                selected={selectedFriend}
                changeSelectedFriend={setSelectedFriend}
              />
            </Grid>
            <Grid item className={classes.conversationBox}>
              <ConversationWindow
                user={user}
                conversations={getSelectedFriendsMessages()}
                updateMessage={sendMessage(mutation)}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Mutation>
  )
}

Chat.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  friendData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conversations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
}

export default withFriendsData(Chat);
