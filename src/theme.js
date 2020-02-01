import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1fbef2',
      light: '#b3d8e3',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Trebuchet MS"', 'Helvetica', 'sans-serif'].join(','),
    htmlFontSize: 17,
    useNextVariants: true,
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
});

export default theme;
