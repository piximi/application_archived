import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';

const NewClassifierDialog = props => {
  const { openedDialog, closeDialog } = props;

  return (
    <Dialog fullWidth maxWidth="xs" onClose={closeDialog} open={openedDialog}>
      <DialogTitle id="max-width-dialog-title">
        Create new classifier
      </DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          margin="dense"
          type="text"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>

        <Button onClick={closeDialog} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewClassifierDialog;
