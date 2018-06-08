import React, { Component } from 'react';
import styles from './UploadDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui';

class UploadDialog extends Component {
  render() {
    const { onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="form-dialog-title">
          Upload file or directory
        </DialogTitle>

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
  }
}

export default withStyles(styles, { withTheme: true })(UploadDialog);
