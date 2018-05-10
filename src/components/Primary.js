import { AppBar, Toolbar } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';

const Primary = ({ classes }) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar />
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
