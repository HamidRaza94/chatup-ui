import { createContext } from 'react';

const defaultSnackBarValue = {
  open: false,
  message: '',
  variant: '',
}

const SnackBarContext = createContext(defaultSnackBarValue);
SnackBarContext.displayName = 'SnackBar';

export { SnackBarContext, defaultSnackBarValue };
