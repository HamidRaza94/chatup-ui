import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, Slide } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { GENERAL } from '../../libs/constants';

const SnackBar = ({ open, message, variant, autoHideDuration, anchorOrigin, handleClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={autoHideDuration}
    anchorOrigin={anchorOrigin}
    onClose={handleClose}
    TransitionComponent={Slide}
  >
    <Alert elevation={6} variant="filled" severity={variant} onClose={handleClose}>
      {message}
    </Alert>
  </Snackbar>
)

SnackBar.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  variant: PropTypes.oneOf(GENERAL.snackBarType),
  autoHideDuration: PropTypes.number,
  anchorOrigin: PropTypes.objectOf({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  handleClose: PropTypes.func.isRequired,
}

SnackBar.defaultProps = {
  open: false,
  message: '',
  variant: 'success',
  autoHideDuration: 4000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
}

export default SnackBar;
