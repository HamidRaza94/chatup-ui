import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { ConversationInput, MessageBox } from '../../../../components';
import useStyles from './styles';
import { GENERAL } from '../../../../libs';

const ConversationWindow = ({ user, conversations, updateMessage }) => {
  const classes = useStyles();
  const [sender, receiver] = GENERAL.conversationType;

  const getConversationType = friendId => user.id === friendId ? sender : receiver;

  return (
    <Grid container direction="column" justify="space-between" className={classes.root}>
      <Grid item className={classes.conversation}>
        <Grid container direction="column" >
          {conversations.map(({ message, from }) => (
            <Grid item>
              <MessageBox message={message} type={getConversationType(from)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.conversationInput}>
        <ConversationInput updateMessage={updateMessage} />
      </Grid>
    </Grid>
  )
}

ConversationWindow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  conversations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  updateMessage: PropTypes.func.isRequired,
}

export default ConversationWindow;
