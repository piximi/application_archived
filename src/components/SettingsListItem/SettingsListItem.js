import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { PureComponent } from 'react';
import styles from './SettingsListItem.css';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from '../SettingsDialog/SettingsDialog';

class SettingsListItem extends PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <React.Fragment>
        <ListItem dense button onClick={this.toggle}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItem>

        <SettingsDialog onClose={this.toggle} open={this.state.open} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SettingsListItem);
