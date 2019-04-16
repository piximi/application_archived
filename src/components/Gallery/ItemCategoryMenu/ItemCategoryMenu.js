import * as React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const ItemCategoryMenu = props => {
  const { anchorEl, onClose, open } = props;

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={onClose}>Foo</MenuItem>
    </Menu>
  );
};

export default ItemCategoryMenu;
