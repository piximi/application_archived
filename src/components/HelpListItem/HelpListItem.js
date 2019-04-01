import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './HelpListItem.css';
import { withStyles } from '@material-ui/core/styles';
import HelpDialog from '../HelpDialog/HelpDialog';
import HelpIcon from '@material-ui/icons/Help';

function HelpListItem() {
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

export default withStyles(styles, { withTheme: true })(HelpListItem);
