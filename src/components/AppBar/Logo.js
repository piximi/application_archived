import React from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function Logo() {
  return (
    <Typography variant="h6" color="inherit">
      Logo
    </Typography>
  );
}

export default withStyles(styles, { withTheme: true })(Logo);
