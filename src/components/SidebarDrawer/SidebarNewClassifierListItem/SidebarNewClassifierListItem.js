import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import useDialog from '../../../hooks/Dialog';
import NewClassifierDialog from '../../Dialog/NewClassifierDialog/NewClassifierDialog';

function SidebarNewClassifierListItem() {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary="New classifier…" />
      </ListItem>

      <NewClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </React.Fragment>
  );
}

export default React.memo(SidebarNewClassifierListItem);
