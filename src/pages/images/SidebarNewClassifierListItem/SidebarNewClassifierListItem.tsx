import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useDialog } from '../../../hooks';
import { ConnectedNewClassifierDialog } from '../../../containers';

const SidebarNewClassifierListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <div>
      <ListItem button dense onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary="New classifier…" />
      </ListItem>

      <ConnectedNewClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </div>
  );
};

export default SidebarNewClassifierListItem;
