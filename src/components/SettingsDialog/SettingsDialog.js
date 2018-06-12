import React, { Component } from 'react';
import styles from './SettingsDialog.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, Dialog, Slide, Tab, Tabs } from 'material-ui';
import SettingsDialogTabContainer from '../SettingsDialogTabContainer/SettingsDialogTabContainer';
import Settings from '../Settings/Settings';

class SettingsDialog extends Component {
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
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={<Slide direction="up" {...this.props} />}
      >
        <Settings onClose={onClose} />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SettingsDialog);
