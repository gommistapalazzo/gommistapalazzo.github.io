import { createMuiTheme } from '@material-ui/core/styles';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff0039',
    },
    secondary: {
      main: '#ff0039',
    },
    background: {
      default: '#24292e',
      paper: '#24292e',
    },
    text: {
      primary: '#959da5',
      secondary: '#959da5',
      disabled: '#959da5',
      hint: '#959da5',
    },
    error: {
      main: '#ff0039',
    },
    warning: {
      main: '#ff7518',
    },
    info: {
      main: '#2f363d',
    },
    success: {
      main: '#85e89d',
    },
    divider: '#f9826c',
  },
});

export default dark;