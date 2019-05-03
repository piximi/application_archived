import * as React from 'react';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover
} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';

const ItemContextMenu = (props: any) => {
  const { anchorEl, onClose, open, openImageViewerDialog } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <Paper>
        <MenuList dense>
          <MenuItem onClick={openImageViewerDialog}>
            <ListItemIcon>
              <IconButton>
                <PhotoIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText inset primary="Open image viewer" />
          </MenuItem>
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default ItemContextMenu;
