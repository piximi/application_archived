import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default class SaveDialog extends React.Component {
  handleCancel = () => {
    this.props.onClose();
  };

  handleDownload = () => {
    this.props.onClose();
    this.props.download();
  };

  render() {
    const { open, defaultDialogText, changeDefaultDialogText } = this.props;
    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Filename"
            fullWidth
            onChange={e => {
              changeDefaultDialogText(e);
            }}
            value={defaultDialogText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDownload} color="primary">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
