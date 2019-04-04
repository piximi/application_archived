import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from './CreateCategoryListItem.css';
import ConnectedCreateCategoryDialog from '../../containers/ConnectedCreateCategoryDialog';

class CreateCategoryListItem extends Component {
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
        <ListItem button onClick={this.toggle}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>

          <ListItemText inset primary="Create category" />
        </ListItem>
        <ConnectedCreateCategoryDialog
          onClose={this.toggle}
          open={this.state.open}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateCategoryListItem);
