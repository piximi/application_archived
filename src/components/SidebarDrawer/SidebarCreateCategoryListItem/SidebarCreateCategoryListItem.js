import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ConnectedCreateCategoryDialog from '../../../containers/ConnectedCreateCategoryDialog';

export default function CreateCategoryListItem() {
  const [open, setOpen] = useState(0);

  return (
    <React.Fragment>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText inset primary="Create category" />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={() => setOpen(!open)}
        open={open}
      />
    </React.Fragment>
  );
}
