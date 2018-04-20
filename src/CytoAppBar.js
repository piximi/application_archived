import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography } from 'material-ui';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class CytoAppBar extends Component {
  render() {
    return (
      <div className={styles}>
        <AppBar position="static">
          <Toolbar>
            <Typography color="inherit" variant="title">
              Cyto
            </Typography>

            <Button color="inherit">Train</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CytoAppBar;
