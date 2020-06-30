import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    background: {
      default: '#FFFFFF',
    },
  },
});
export default theme;
