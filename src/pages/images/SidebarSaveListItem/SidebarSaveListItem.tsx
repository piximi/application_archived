import * as React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import * as MaterialUI from '@material-ui/core';
import { SaveMenuList } from '..';
import { useMenu } from '@piximi/hooks';

const SidebarSaveListItem = () => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  return (
    <React.Fragment>
      <MaterialUI.ListItem button onClick={openMenu}>
        <MaterialUI.ListItemIcon>
          <SaveIcon />
        </MaterialUI.ListItemIcon>

        <MaterialUI.ListItemText primary="Save" />
      </MaterialUI.ListItem>

      <SaveMenuList anchorEl={anchorEl} onClose={closeMenu} open={openedMenu} />
    </React.Fragment>
  );
};

export default SidebarSaveListItem;
