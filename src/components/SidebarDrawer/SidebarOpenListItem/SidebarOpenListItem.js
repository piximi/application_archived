import {
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import useDialog from '../../../hooks/Dialog';
import OpenDialog from '../../Dialog/OpenSampleDialog/OpenSampleDialog';
import useMenu from '../../../hooks/Menu';

function openProject(e, props) {
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = reader.result;
    const data = JSON.parse(text);
    props.updateStore(data);
  };

  reader.readAsText(e.target.files[0]);
}

function SidebarOpenListItem(props) {
  const { loadDemoProject } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { anchorEl, openMenu, closeMenu } = useMenu();

  const onOpenProjectMenuItemClick = event => {
    openProject(event, props);

    closeMenu();
  };

  const onOpenExampleProjectMenuItemClick = () => {
    openDialog();

    closeMenu();
  };

  return (
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>

        <ListItemText primary="Open" />
      </ListItem>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <input
          style={{ display: 'none' }}
          type="file"
          accept=".cyto"
          name="file"
          id="open-project"
          onChange={onOpenProjectMenuItemClick}
        />
        <label htmlFor="open-project">
          <MenuItem>Open project</MenuItem>
        </label>

        <MenuItem onClick={onOpenExampleProjectMenuItemClick}>
          Open example project
        </MenuItem>
      </Menu>

      <OpenDialog
        onClose={closeDialog}
        open={openedDialog}
        loadDemoProject={loadDemoProject}
      />
    </React.Fragment>
  );
}

export default React.memo(SidebarOpenListItem);
