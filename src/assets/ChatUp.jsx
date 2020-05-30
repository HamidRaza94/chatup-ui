import React from 'react';
import { makeStyles } from '@material-ui/core';

const style = {
  x: {
    backgroundSize: '20px 30px',
  },
}

const useStyles = makeStyles(style);

const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.x}
    >
      <path d="M 50 150 Q 50 50 150 50 Q 250 50 300 50 Q 400 50 400 150 V 250 Q 400 350 300 350 Q 300 300 250 300 H 150 Q 50 250 50 150 Z" />
    </svg>
  )
}

export default Logo;