import React from 'react';
import { makeStyles, Switch, FormControlLabel, FormGroup } from '@material-ui/core';

import { Header } from './components';
import { ChatV1 } from '../scenes';
import style from './style';

const useStyle = makeStyles(style);

const MainLayout = () => {
  const classes = useStyle();
  const [auth, setAuth] = React.useState(true);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.body}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Header auth={auth} />
        </div>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <div className={classes.content}>
          <ChatV1 />
        </div>
      </div>
    </div>
  )
}

export default MainLayout;
