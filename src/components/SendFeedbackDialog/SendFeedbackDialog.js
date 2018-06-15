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
      <Dialog
        open={open}
        onClose={onClose}
        className={classes.sendFeedbackDialog}
      >
        <DialogContent className={classes.sendFeedbackDialogContent}>
          <textarea
            className={classes.sendFeedbackTextArea}
            placeholder={'This is an example message'}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>

          <Button onClick={onClose} color="primary">
            Send feedback
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SendFeedbackDialog);
