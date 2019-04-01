import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from '../SettingsDialog/SettingsDialog';

export default function SettingsListItem() {
  const [open, setOpen] = useState(0);

  return (
    <React.Fragment>
      <ListItem dense button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary="Settings" />
      </ListItem>

      <SettingsDialog onClose={() => setOpen(!open)} open={open} />
    </React.Fragment>
  );
}
