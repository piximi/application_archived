import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ConnectedCreateCategoryDialog from '../../../containers/ConnectedCreateCategoryDialog';
import useDialog from '../../../hooks/Dialog';

export default function CreateCategoryListItem() {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem button onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText inset primary="Create category" />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
}
