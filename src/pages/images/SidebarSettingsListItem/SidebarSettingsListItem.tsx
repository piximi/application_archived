import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { SettingsDialog } from '../../settings';
import { useDialog } from '@cytoai/hooks';

const SettingsListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <div>
      <ListItem dense button disabled onClick={openDialog}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary="Settings" />
      </ListItem>

      <SettingsDialog onClose={closeDialog} open={openedDialog} />
    </div>
  );
};

export default SettingsListItem;
