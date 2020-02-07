import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Header, SearchBar, Chat } from './components';
import { conversation } from './mocks';
import style from './style';

const useStyle = makeStyles(style);

const MainLayout = () => {
  const classes = useStyle();

  return (
    <div className={classes.body}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <SearchBar />
          </div>
          <div className={classes.rightContent}>
            <Chat conversation={conversation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout;
