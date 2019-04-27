import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../../../components/Dialog/Dialog';
import DialogTitle from '../../../components/DialogTitle/DialogTitle';
import DialogActions from '../../../components/DialogActions/DialogActions';
import DialogContent from '../../../components/DialogContent/DialogContent';
import { TextField } from '@material-ui/core';

const NewClassifierDialog = (props: any) => {
  const { createClassifier, openedDialog, closeDialog } = props;

  const { t: translation } = useTranslation();

  const [name, setName] = React.useState(translation('Untitled classifier'));

  const onCreateClassifierClick = () => {
    createClassifier(name);

    closeDialog();
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <Dialog open={openedDialog} onClose={closeDialog}>
      <DialogTitle title={'Create new classifier'} />

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          margin="dense"
          onChange={onNameChange}
          placeholder={translation('Untitled classifier')}
          type="text"
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle={'Create'}
        cancellationTitle={'Cancel'}
        onAcceptance={onCreateClassifierClick}
        onCancellation={closeDialog}
      />
    </Dialog>
  );
};

export default NewClassifierDialog;
