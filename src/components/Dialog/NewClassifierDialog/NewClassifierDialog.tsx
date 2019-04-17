import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const NewClassifierDialog = (props: any) => {
  const { createClassifier, openedDialog, closeDialog } = props;

  const { t } = useTranslation();

  const [name, setName] = React.useState(t('Untitled classifier'));

  const onCreateClassifierClick = () => {
    createClassifier(name);

    closeDialog();
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={closeDialog} open={openedDialog}>
      <DialogTitle id="max-width-dialog-title">
        {t('Create new classifier')}
      </DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          margin="dense"
          onChange={onNameChange}
          placeholder={t('Untitled classifier')}
          type="text"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          {t('Cancel')}
        </Button>

        <Button onClick={onCreateClassifierClick} color="primary">
          {t('Create')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewClassifierDialog;
