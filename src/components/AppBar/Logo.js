import React, { Component } from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class Logo extends Component {
  render() {
    return (
      <Typography variant="h6" color="inherit">
        Cyto
      </Typography>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Logo);
