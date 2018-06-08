import React, { Component } from 'react';
import styles from './SettingsDialog.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, Dialog, Tab, Tabs } from 'material-ui';
import SettingsDialogTabContainer from '../SettingsDialogTabContainer/SettingsDialogTabContainer';

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
      <Dialog open={open} onClose={onClose}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={this.state.tab} onChange={this.onChange} fullWidth>
              <Tab label="A" />
              <Tab label="B" />
              <Tab label="C" />
            </Tabs>
          </AppBar>
          {this.state.tab === 0 && (
            <SettingsDialogTabContainer>A</SettingsDialogTabContainer>
          )}
          {this.state.tab === 1 && (
            <SettingsDialogTabContainer>B</SettingsDialogTabContainer>
          )}
          {this.state.tab === 2 && (
            <SettingsDialogTabContainer>C</SettingsDialogTabContainer>
          )}
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SettingsDialog);
