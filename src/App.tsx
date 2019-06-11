import * as React from 'react';
import { ConnectedApplication } from './containers';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedApplication />
    </ThemeProvider>
  );
};

export default App;
