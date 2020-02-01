import React from 'react';

import { SnackBarContext } from '../contexts';

const withSnackBarConsumer = (WrappedComponent) => (props) => (
  <SnackBarContext.Consumer>
    {(snackBarProps) => <WrappedComponent {...snackBarProps} {...props} />}
  </SnackBarContext.Consumer>
);

export default withSnackBarConsumer;
