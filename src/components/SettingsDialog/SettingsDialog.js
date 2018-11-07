import React, { Component } from 'react';
import styles from './SettingsDialog.css';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import Settings from '../Settings/Settings';

type Properties = {};

class SettingsDialog extends Component<Properties> {
  state = {
    tab: 0
  };

  onChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { classes, onClose, open } = this.props;

    return (
      <Dialog
        className={classes.settingsDialog}
        fullScreen
        open={open}
        onClose={onClose}
        //TransitionComponent={<Slide direction="up" {...this.props} />}
      >
        <Settings onClose={onClose} />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SettingsDialog);
