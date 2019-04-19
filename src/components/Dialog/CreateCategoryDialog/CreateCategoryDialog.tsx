import * as React from 'react';
import styles from './CreateCategoryDialog.css';
import { Dialog, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import DialogContent from '../../DialogContent/DialogContent';
import DialogActions from '../../DialogActions/DialogActions';
import DialogTitle from '../../DialogTitle/DialogTitle';
import ColorIconButton from '../../ColorIconButton/ColorIconButton';

const useStyles = makeStyles(styles);

const CreateCategoryDialog = (props: any) => {
  const { createCategory, open, categories, onClose } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  const [color, setColor] = React.useState('#00e676');
  const [description, setDescription] = React.useState('');

  const onDescriptionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  const onColorChange = (color: any) => {
    setColor(color.hex);
  };

  const onCreateClick = () => {
    createCategory(color, description);

    onClose();
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      open={open}
    >
      <DialogTitle title={'Create a new category'} />

      <DialogContent>
        <ColorIconButton color={color} onColorChange={onColorChange} />

        <TextField
          autoFocus
          className={classes.input}
          margin="dense"
          fullWidth
          id="description"
          label={translation('Description')}
          onChange={onDescriptionChange}
          type="text"
          value={description}
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle="Create"
        cancellationTitle="Cancel"
        onAcceptance={onCreateClick}
        onCancellation={onClose}
      />
    </Dialog>
  );
};

export default CreateCategoryDialog;
