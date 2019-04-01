import React from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export default function Logo() {
  return (
    <Typography variant="h6" color="inherit">
      Logo
    </Typography>
  );
}

withStyles(styles, { withTheme: true })(Logo);
