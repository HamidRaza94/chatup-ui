import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import { MainLayout } from './layouts';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <MainLayout />
  </MuiThemeProvider>
);

export default App;
