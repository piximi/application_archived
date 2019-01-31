import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { PureComponent } from 'react';
import styles from './OpenSampleListItem.css';
import { withStyles } from '@material-ui/core/styles';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenDialog from '../OpenDialog/OpenSampleDialog';

class OpenSampleListItem extends PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { loadDemoProject } = { ...this.props };
    return (
      <React.Fragment>
        <ListItem dense button onClick={this.toggle}>
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>

          <ListItemText inset primary="Open sample" />
        </ListItem>

        <OpenDialog
          onClose={this.toggle}
          open={this.state.open}
          loadDemoProject={loadDemoProject}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OpenSampleListItem);
