import React from 'react';
import ConnectedApplication from './containers/ConnectedApplication';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';

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

export default withStyles({}, { withTheme: true })(App);
