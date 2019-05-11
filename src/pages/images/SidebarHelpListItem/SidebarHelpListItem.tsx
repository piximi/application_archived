import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { HelpDialog } from '..';
import HelpIcon from '@material-ui/icons/Help';
import { useDialog } from '@cytoai/hooks';

const HelpListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <div>
      <ListItem dense disabled button onClick={openDialog}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>

        <ListItemText primary="Help" />
      </ListItem>

      <HelpDialog onClose={closeDialog} open={openedDialog} />
    </div>
  );
};

export default HelpListItem;
