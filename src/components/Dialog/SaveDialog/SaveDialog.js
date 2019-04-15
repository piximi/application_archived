import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const SaveDialog = props => {
  function handleCancel(props) {
    props.onClose();
  }

  function handleDownload(props) {
    props.onClose();
    props.download();
  }

  const { open, defaultDialogText, changeDefaultDialogText } = props;

  return (
    <Dialog
      open={open}
      onClose={() => handleCancel(props)}
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
        <Button onClick={() => handleCancel(props)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleDownload(props)} color="primary">
          Download
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
