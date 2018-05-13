import React from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui';

const CreateCategoryDialog = ({ classes, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="form-dialog-title">Settings</DialogTitle>
      <DialogContent>
        <DialogContentText>&nbsp;</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={onClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(CreateCategoryDialog);
