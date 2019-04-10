import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function SidebarNewListItem() {
  return (
    <ListItem dense button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>

      <ListItemText primary="New…" />
    </ListItem>
  );
}

export default React.memo(SidebarNewListItem);
