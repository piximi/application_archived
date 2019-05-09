import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
  Popover
} from '@material-ui/core';
import * as React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { useMenu } from '../../../hooks';
import {
  OpenClassifierMenuItem,
  OpenExampleClassifierMenuItem,
  OpenWeightsMenuItem
} from '..';
// import * as API from '../../../classifierBackup';

function openProject(e, props) {
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = reader.result;
    const data = JSON.parse(text);
    props.updateStore(data);
  };

  reader.readAsText(e.target.files[0]);
}

const SidebarOpenListItem = props => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const onOpenProjectMenuItemClick = event => {
    openProject(event, props);

    closeMenu();
  };

  const openWeights = event => {
    // API.importWeights(event.target.files);

    closeMenu();
  };

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <div>
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
            <OpenClassifierMenuItem onChange={onOpenProjectMenuItemClick} />

            <Divider />

            <OpenExampleClassifierMenuItem closeMenu={closeMenu} />

            <OpenWeightsMenuItem onChange={openWeights} />
          </MenuList>
        </Paper>
      </Popover>
    </div>
  );
};

export default SidebarOpenListItem;
