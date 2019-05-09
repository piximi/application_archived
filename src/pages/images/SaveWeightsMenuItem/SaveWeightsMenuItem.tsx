import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { SaveWeightsDialog } from '..';
import { useDialog } from '../../../hooks';

const SaveWeightsMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={openDialog}>
        <MaterialUI.ListItemText primary="Save weights" />
      </MaterialUI.MenuItem>

      <SaveWeightsDialog open={openedDialog} onClose={closeDialog} />
    </React.Fragment>
  );
};

export default SaveWeightsMenuItem;
