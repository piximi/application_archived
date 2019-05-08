import * as React from 'react';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Backdrop
} from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const GalleryItemContextMenu = (props: any) => {
  const { anchorEl, onClose, open, openImageViewerDialog } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().top + 7 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 7 : 0
  };

  return (
    <Popover
      // BackdropComponent={<Backdrop open={false}></Backdrop>}
      // BackdropProps={{ open: false, style:{pointerEvents: 'none'} }}
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <Paper>
        <MenuList dense>
          <MenuItem
            onClick={() => {
              onClose();
              openImageViewerDialog();
            }}
          >
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText inset primary="Open image viewer" />
          </MenuItem>
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default GalleryItemContextMenu;
