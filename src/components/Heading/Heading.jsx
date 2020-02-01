import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { heading } from '../../cms';
import { IMAGES } from '../../libs';

const Heading = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center" alignItems="center">
      <Grid item><img src={IMAGES.logo} width={50} height={50} alt="chatUp" /></Grid>
      <Grid item><Typography variant="h3" color="primary">{heading.title}</Typography></Grid>
    </Grid>
  )
}

export default Heading;
