import React, { Component } from 'react';
import styles from './SendFeedbackDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from 'material-ui';

class SendFeedbackDialog extends Component {
  render() {
    const { classes, onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="form-dialog-title">Send feedback</DialogTitle>

        <DialogContent className={classes.sendFeedbackDialogContent}>
          <textarea className={classes.sendFeedbackTextArea} />
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
  }
}

export default withStyles(styles, { withTheme: true })(SendFeedbackDialog);
