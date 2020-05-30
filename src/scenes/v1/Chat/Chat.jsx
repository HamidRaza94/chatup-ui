import React from 'react';
import { makeStyles } from '@material-ui/core';

import { SearchBar, ConversationWindow } from './components';
import { conversation } from './mocks';
import style from './style';

const useStyles = makeStyles(style);

const Chat = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.leftContent}>
        <SearchBar />
      </div>
      <div className={classes.rightContent}>
        <ConversationWindow conversation={conversation} />
      </div>
    </>
  )
};

export default Chat;
