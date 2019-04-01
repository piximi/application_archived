import React, { useState } from 'react';
import styles from './SettingsDialog.css';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import Settings from '../Settings/Settings';

function SettingsDialog(props) {
  const [tab, setTab] = useState(0);

  const { classes, onClose, open } = props;

  return (
    <Dialog
      className={classes.settingsDialog}
      fullScreen
      open={open}
      onClose={onClose}
    >
      <Settings onClose={onClose} />
    </Dialog>
  );
}

export default withStyles(styles, { withTheme: true })(SettingsDialog);
