import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';

import { heading } from '../../../../cms';
import { IMAGES } from '../../../../libs';
import style from './style';

const useStyles = makeStyles(style);

const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item>
            <img src={IMAGES.logo} alt={heading.title} className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography className={classes.title} variant="h4">
              {heading.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        logout
      </Grid>
    </Grid>
  )
}

export default Header;
