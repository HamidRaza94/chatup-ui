import React, { useState, useEffect, createRef } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { ToolTip } from '../ToolTip';
import { withSnackBarConsumer } from '../../hoc';
import useStyles from './styles';
import messageSchema from './validations';

const ConversationInput = ({ updateMessage, openSnackBar }) => {
  const inputRef = createRef();
  const classes = useStyles();
  const [message, setMessage] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleIsValid = () => messageSchema.isValidSync({ message }, { abortEarly: false });

  const handleSubmit = () => {
    const isValid = handleIsValid();

    if (isValid) {
      updateMessage(message);
      setMessage('');
    } else {
      openSnackBar({ message: 'Message can not be empty', variant: 'error' });
    }
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type Message Here..."
        inputProps={{ 'aria-label': 'search google maps' }}
        inputRef={inputRef}
      />
      <ToolTip title={!handleIsValid() ? 'Please type first' : 'Send'}>
        <span>
          <IconButton disabled={!handleIsValid()} onClick={handleSubmit} className={classes.iconButton} aria-label="send">
            <Send />
          </IconButton>
        </span>
      </ToolTip>
    </Paper>
  )
}

export default withSnackBarConsumer(ConversationInput);
