import {
  Paper,
  MenuList,
  Divider,
  Popover,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import useDialog from '../../../hooks/Dialog';
import OpenDialog from '../../Dialog/OpenExampleClassifierDialog/OpenExampleClassifierDialog';
import useMenu from '../../../hooks/Menu';
import * as API from '../../../classifier';

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

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const onOpenProjectMenuItemClick = event => {
    openProject(event, props);

    closeMenu();
  };

  const openExampleClassifier = () => {
    openDialog();

    closeMenu();
  };

  const openWeights = event => {
    API.importWeights(event.target.files);

    closeMenu();
  };

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>

        <ListItemText primary="Open" />
      </ListItem>

      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        onClose={closeMenu}
        open={openedMenu}
      >
        <Paper>
          <MenuList dense>
            <input
              accept=".cyto"
              id="open-project"
              name="file"
              onChange={onOpenProjectMenuItemClick}
              style={{ display: 'none' }}
              type="file"
            />
            <label htmlFor="open-project">
              <MenuItem>
                <ListItemText primary="Open classifier" />
              </MenuItem>
            </label>

            <Divider />

            <MenuItem onClick={openExampleClassifier}>
              <ListItemText primary="Open example classifier" />
            </MenuItem>

            <input
              accept="*"
              id="open-weights"
              name="file"
              onChange={openWeights}
              style={{ display: 'none' }}
              type="file"
            />
            <label htmlFor="open-weights">
              <MenuItem>
                <ListItemText primary="Open weights" />
              </MenuItem>
            </label>
          </MenuList>
        </Paper>
      </Popover>

      <OpenDialog
        onClose={closeDialog}
        open={openedDialog}
        loadDemoProject={loadDemoProject}
      />
    </React.Fragment>
  );
}

export default SidebarOpenListItem;
