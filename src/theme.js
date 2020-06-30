import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#41914e',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#fff',
        margin: '5px',
      },
    },
  }
});
export default theme;
