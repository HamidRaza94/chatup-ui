import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';
import { GENERAL } from '../../libs';

const MessageBox = ({ message, type }) => {
  const classes = useStyles();
  const [, receiver] = GENERAL.conversationType; 

  let messageBoxStyle;
  let messageStyle;

  if (type === receiver) {
    messageBoxStyle = classes.secondaryMessageBox ;
    messageStyle = classes.secondaryMessage ;
  } else {
    messageBoxStyle = classes.primaryMessageBox;
    messageStyle = classes.primaryMessage;
  }

  return (
    <Paper
      elevation={0}
      className={classNames(classes.root, messageBoxStyle)}
    >
      <Typography
        display="inline"
        variant="subtitle1"
        align="center"
        className={classNames(classes.message, messageStyle)}
      >
        {message}
      </Typography>
    </Paper>
  )
};

export default MessageBox;
