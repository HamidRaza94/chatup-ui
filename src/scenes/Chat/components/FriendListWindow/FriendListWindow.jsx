import React, { Fragment } from 'react';
import { List, Divider } from '@material-ui/core';

import { Row } from '../../../../components';
import useStyles from './styles';

const FriendListWindow = ({ friends, selected, changeSelectedFriend }) => {
  const classes = useStyles();

  const shouldShowDivider = (id) => (friends.length - 1) !== id && (id !== selected - 1) && (id !== selected);

  return (
    <List className={classes.root}>
      {
        friends.map(({ id, name, conversations }) => (
          <Fragment key={id}>
            <Row
              name={name}
              lastMessage={conversations.length ? conversations[conversations.length - 1].message : ''}
              rowNo={id}
              handleClick={changeSelectedFriend}
              isClicked={id === selected.toString()}
            />
            {shouldShowDivider(id) && <Divider className={classes.divider} variant="inset" component="li" />}
          </Fragment>
        ))
      }
    </List>
  );
}

export default FriendListWindow;
