import React from 'react';
import styles from './ItemCategoryMenu.css';
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';

function ItemCategoryMenu(props) {
  const { anchorEl, onClose, open } = props;

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={onClose}>Foo</MenuItem>
    </Menu>
  );
}

export default withStyles(styles, { withTheme: true })(ItemCategoryMenu);
