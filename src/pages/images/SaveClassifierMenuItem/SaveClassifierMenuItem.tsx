import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { useDialog } from '@piximi/hooks';
import { ConnectedSaveClassifierDialog } from '../../../containers';

const SaveClassifierMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={openDialog}>
        <MaterialUI.ListItemText primary="Save classifier" />
      </MaterialUI.MenuItem>

      <ConnectedSaveClassifierDialog
        open={openedDialog}
        onClose={closeDialog}
      />
    </React.Fragment>
  );
};

export default SaveClassifierMenuItem;
