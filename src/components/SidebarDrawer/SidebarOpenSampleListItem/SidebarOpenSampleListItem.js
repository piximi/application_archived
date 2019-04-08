import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenDialog from '../../Dialog/OpenSampleDialog/OpenSampleDialog';
import useDialog from '../../../hooks/Dialog';

export default function SidebarOpenSampleListItem(props) {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { loadDemoProject } = { ...props };

  return (
    <React.Fragment>
      <ListItem dense button onClick={openDialog}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>

        <ListItemText inset primary="Open demo" />
      </ListItem>

      <OpenDialog
        onClose={closeDialog}
        open={openedDialog}
        loadDemoProject={loadDemoProject}
      />
    </React.Fragment>
  );
}
