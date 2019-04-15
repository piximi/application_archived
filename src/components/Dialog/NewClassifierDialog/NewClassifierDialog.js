import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';

const NewClassifierDialog = props => {
  const { createClassifier, openedDialog, closeDialog } = props;

  const [name, setName] = React.useState('Untitled classifier');

  const onCreateClassifierClick = () => {
    createClassifier(name);

    closeDialog();
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

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
          onChange={onNameChange}
          placeholder="Untitled classifier"
          type="text"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>

        <Button onClick={onCreateClassifierClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewClassifierDialog;
