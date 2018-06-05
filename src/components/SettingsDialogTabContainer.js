import React from 'react';
import styles from './SettingsDialogTabContainer.css';
import { withStyles } from 'material-ui/styles/index';
import { Typography } from 'material-ui';

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
