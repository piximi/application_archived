import * as React from 'react';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover
} from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';
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
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default GalleryItemContextMenu;
