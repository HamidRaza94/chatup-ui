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
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ConversationWindow;
