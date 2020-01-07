import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Trebuchet MS"', 'Helvetica', 'sans-serif'].join(','),
    htmlFontSize: 17,
    useNextVariants: true,
  }
});

export default theme;
