import React from 'react';
import styles from './SettingsDialogTabContainer.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const SettingsDialogTabContainer = ({ children }) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

export default withStyles(styles, { withTheme: true })(
  SettingsDialogTabContainer
);
