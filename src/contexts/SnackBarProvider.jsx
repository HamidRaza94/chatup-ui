import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SnackBarContext, defaultSnackBarValue } from './contexts';
import { SnackBar } from '../components';

const SnackBarProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultSnackBarValue.open);
  const [message, setMessage] = useState(defaultSnackBarValue.message);
  const [variant, setVariant] = useState(defaultSnackBarValue.variant);

  const openSnackBar = ({ message, variant }) => {
    setOpen(true);
    setMessage(message);
    setVariant(variant);
  }

  const closeSnackBar = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <SnackBarContext.Provider value={{ openSnackBar }}>
      {children}
      <SnackBar
        open={open}
        message={message}
        variant={variant}
        handleClose={closeSnackBar}
      />
    </SnackBarContext.Provider>
  )
}

SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SnackBarProvider;
