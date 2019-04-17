import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';

const HelpDialog = (props: any)  => {
  const { onClose, open } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>&nbsp;</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HelpDialog;
