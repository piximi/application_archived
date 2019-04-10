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
  const [anchorEl, setAnchorEl] = React.useState();

  const { loadDemoProject } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const onListItemClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onOpenProjectMenuItemClick = event => {
    openProject(event, props);

    setAnchorEl();
  };

  const onOpenExampleProjectMenuItemClick = () => {
    openDialog();

    setAnchorEl();
  };

  const onMenuClose = () => {
    setAnchorEl();
  };

  return (
    <React.Fragment>
      <ListItem button onClick={onListItemClick}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>

        <ListItemText primary="Open" />
      </ListItem>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
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
