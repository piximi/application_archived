import React from 'react';
import styles from './UploadDialog.css';
import { withStyles } from 'material-ui/styles/index';
import { Button, Dialog, DialogActions, DialogContent } from 'material-ui';

const UploadDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <input name="myFile" type="file" />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={onClose} color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles, { withTheme: true })(UploadDialog);
