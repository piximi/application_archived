import React, { PureComponent } from 'react';
import styles from './ItemCategoryMenu.css';
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';

class ItemCategoryMenu extends PureComponent {
  render() {
    const { anchorEl, onClose, open } = this.props;

    return (
      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        <MenuItem onClick={this.onClose}>Foo</MenuItem>
      </Menu>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemCategoryMenu);
