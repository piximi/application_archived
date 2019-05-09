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
import DeleteIcon from '@material-ui/icons/Delete';
import { useTranslation } from 'react-i18next';

const GalleryItemContextMenu = (props: any) => {
  const { anchorEl, onClose, open, openImageViewerDialog } = props;

  const { t: translation } = useTranslation();

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
            <ListItemText inset primary={translation('Open image viewer')} />
          </MenuItem>
          <MenuItem
            onClick={() => {
              onClose();
              // delete image
            }}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText inset primary={translation('Delete images')} />
          </MenuItem>
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default GalleryItemContextMenu;
