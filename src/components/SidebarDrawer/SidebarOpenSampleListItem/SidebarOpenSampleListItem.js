import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenDialog from '../../OpenSampleDialog/OpenSampleDialog';

export default function SidebarOpenSampleListItem(props) {
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
