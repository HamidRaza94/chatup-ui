import { makeStyles } from '@material-ui/core';

const styles = {
  root: {
    paddingTop: 5,
    paddingBottom: 5,
    background: '#2bffa0',
  },
  row: {
    marginTop: 5,
    marginBottom: 5,
  },
  inputField: {
    marginTop: 5,
    marginBottom: 5,
  },
  pointer: {
    cursor: 'pointer',
  },
  fabProgress: {
    // color: green[500],
    position: 'absolute',
    top: -3,
    left: -5,
    zIndex: 1,
  },
}

export default makeStyles(styles);
