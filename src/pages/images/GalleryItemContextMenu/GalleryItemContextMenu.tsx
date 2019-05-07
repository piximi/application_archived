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
import ColorLensIcon from '@material-ui/icons/ColorLens';

const GalleryItemContextMenu = (props: any) => {
  const { anchorEl, onClose, open, openImageViewerDialog } = props;
  // if (anchorEl) { console.log("GalleryItemContextMenu: anchorEl"); console.log(anchorEl); }

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
          <MenuItem
            onClick={() => {
              onClose();
              openImageViewerDialog();
            }}
          >
            <ListItemIcon>
              <IconButton>
                <ColorLensIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText inset primary="Open image viewer" />
          </MenuItem>
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default GalleryItemContextMenu;
