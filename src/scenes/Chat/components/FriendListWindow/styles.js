import { makeStyles } from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    width: '100%',
  },
  divider: {
    background: theme.palette.primary.light,
    marginRight: 10,
  },
}));

export default makeStyles(styles);
