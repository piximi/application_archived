import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './OpenSampleListItem.css';
import { withStyles } from '@material-ui/core/styles';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenDialog from '../OpenDialog/OpenSampleDialog';

function OpenSampleListItem(props) {
  const [open, setOpen] = useState(0);

  const { loadDemoProject } = { ...props };

  return (
    <React.Fragment>
      <ListItem dense button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>

        <ListItemText inset primary="Open demo" />
      </ListItem>

      <OpenDialog
        onClose={() => setOpen(!open)}
        open={open}
        loadDemoProject={loadDemoProject}
      />
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(OpenSampleListItem);
