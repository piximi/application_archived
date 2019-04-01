import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import HelpDialog from '../HelpDialog/HelpDialog';
import HelpIcon from '@material-ui/icons/Help';

export default function HelpListItem() {
  const [open, setOpen] = useState(0);

  return (
    <React.Fragment>
      <ListItem dense button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>

        <ListItemText primary="Help" />
      </ListItem>

      <HelpDialog onClose={() => setOpen(!open)} open={open} />
    </React.Fragment>
  );
}
