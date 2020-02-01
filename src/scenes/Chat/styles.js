import { makeStyles } from '@material-ui/core';

const styles = (theme => ({
  root: {
    height: '90vh',
  },
  conversationListBox: {
    flex: '0 0 300px',
    background: theme.palette.secondary.main,
  },
  conversationBox: {
    flex: 1,
    backgroundColor: theme.palette.primary.light,
  },
}));

export default makeStyles(styles);
