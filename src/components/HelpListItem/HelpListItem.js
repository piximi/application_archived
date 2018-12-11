import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { PureComponent } from 'react';
import styles from './HelpListItem.css';
import { withStyles } from '@material-ui/core/styles';
import HelpDialog from '../HelpDialog/HelpDialog';
import HelpIcon from '@material-ui/icons/Help';

class HelpListItem extends PureComponent {
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
            <HelpIcon />
          </ListItemIcon>

          <ListItemText primary="Help" />
        </ListItem>

        <HelpDialog onClose={this.toggle} open={this.state.open} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HelpListItem);
