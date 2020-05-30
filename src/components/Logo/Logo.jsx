import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';

import { LogoIcon } from '../../assets';
import { heading } from '../../cms';
import style from './style';

const useStyles = makeStyles(style);

const Logo = ({ position }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify={position} className={classes.root}>
      <Grid item className={classes.logoIcon}>
        <LogoIcon />
      </Grid>
      <Grid item>
        <Typography variant="h4" noWrap>
          {heading.title}
        </Typography>
      </Grid>
    </Grid>
  );
}

Logo.propTypes = {
  position: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
}

Logo.defaultProps = {
  position: 'flex-start',
}

export default Logo;
