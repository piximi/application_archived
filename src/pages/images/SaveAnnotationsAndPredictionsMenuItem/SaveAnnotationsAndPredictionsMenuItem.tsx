import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { SaveAnnotationsAndPredictionsDialog } from '..';
import { useDialog } from '@piximi/hooks';

const SaveAnnotationsAndPredictionsMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={openDialog}>
        <MaterialUI.ListItemText primary="Save annotations and predictions" />
      </MaterialUI.MenuItem>

      <SaveAnnotationsAndPredictionsDialog
        open={openedDialog}
        onClose={closeDialog}
      />
    </React.Fragment>
  );
};

export default SaveAnnotationsAndPredictionsMenuItem;
