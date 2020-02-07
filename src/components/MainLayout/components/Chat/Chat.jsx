import React from 'react';
import { makeStyles } from '@material-ui/core';

import style from './style';

const useStyles = makeStyles(style);

const Chat = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        Upper
      </div>
      <div>
        Bottom
      </div>
    </div>
  )
}

export default Chat;
