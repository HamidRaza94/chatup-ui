import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import { SnackBarProvider } from './contexts';
import { client } from './client';
import Routes from './Routes';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <SnackBarProvider>
        <Routes />
      </SnackBarProvider>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
