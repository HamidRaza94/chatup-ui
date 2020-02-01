import { makeStyles } from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    width: '100%',
  },
  divider: {
    background: theme.palette.primary.light,
  },
}));

export default makeStyles(styles);
