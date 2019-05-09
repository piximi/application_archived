import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { SaveClassifierDialog } from '..';
import { useDialog } from '../../../hooks';

const SaveClassifierMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={openDialog}>
        <MaterialUI.ListItemText primary="Save classifier" />
      </MaterialUI.MenuItem>

      <SaveClassifierDialog open={openedDialog} onClose={closeDialog} />
    </React.Fragment>
  );
};

export default SaveClassifierMenuItem;
