import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  // Badge,
  // withStyles,
} from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';
// import { badgeStyles } from './styles';

const Row = ({ name, lastMessage, rowNo, isClicked, handleClick }) => {
  const classes = useStyles();
  // const StyledBadge = withStyles(badgeStyles[status])(Badge);

  return (
    <ListItem
      className={classNames(classes.root, isClicked && classes.clicked)}
      onClick={() => handleClick(rowNo)}
    >
      <ListItemAvatar>
        {/* <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        > */}
          <Avatar>{name.charAt(0)}</Avatar>
        {/* </StyledBadge> */}
      </ListItemAvatar>
      <ListItemText button primary={name} secondary={lastMessage} />
      {/* <Badge badgeContent={unreadMessageCount} color="primary" /> */}
    </ListItem>
  )
}

export default Row;
