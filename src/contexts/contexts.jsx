import { createContext } from 'react';

import { GENERAL } from '../libs';

const [success] = GENERAL.snackBarType;

const defaultSnackBarValue = {
  open: false,
  message: '',
  variant: success,
}

const SnackBarContext = createContext(defaultSnackBarValue);
SnackBarContext.displayName = 'SnackBar';

export { SnackBarContext, defaultSnackBarValue };
