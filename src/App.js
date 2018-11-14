import React from 'react';
import ConnectedApplication from './containers/ConnectedApplication';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';
// FIXME: Why isn’t this `import styles from './App.css';`?
import styles from './App.css.js';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ConnectedApplication />
    </MuiThemeProvider>
  );
}

export default withStyles(styles, { withTheme: true })(App);
