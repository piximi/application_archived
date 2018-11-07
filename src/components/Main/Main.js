import React from 'react';
import styles from './Main.css';
import { withStyles } from '@material-ui/core/styles';

const Main = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar} />

      <h1>Hello, world!</h1>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Main);
