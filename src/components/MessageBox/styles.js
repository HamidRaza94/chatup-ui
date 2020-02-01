import { makeStyles } from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    background: 'inherit',
    margin: '8px 5px',
  },
  message: {
    borderRadius: 15,
    maxWidth: 500,
    padding: '6px 12px',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '2px 2px 10px #aaaaaa',
  },
  primaryMessageBox: {
    textAlign: 'right',
  },
  secondaryMessageBox: {
    textAlign: 'left',
  },
  primaryMessage: {
    color: '#000000',
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderBottomRightRadius: 0,
  },
  secondaryMessage: {
    color: '#000000',
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderBottomLeftRadius: 0,
  },
}));

export default makeStyles(styles);
