import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import HelpDialog from '../../Dialog/HelpDialog/HelpDialog';
import HelpIcon from '@material-ui/icons/Help';
import useDialog from '../../../hooks/Dialog';

function HelpListItem() {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem dense button onClick={openDialog}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>

        <ListItemText primary="Help" />
      </ListItem>

      <HelpDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
}

export default HelpListItem;
