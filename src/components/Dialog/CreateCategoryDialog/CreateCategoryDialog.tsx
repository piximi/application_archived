import * as React from 'react';
import styles from './CreateCategoryDialog.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Popover,
  Paper,
  IconButton,
  DialogTitle
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ColorPicker from '../../ColorPicker/ColorPicker';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import useMenu from '../../../hooks/Menu';

const useStyles = makeStyles(styles);

const CreateCategoryDialog = (props: any) => {
  const { createCategory, open, categories, onClose } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const [color, setColor] = React.useState('#00e676');
  const [description, setDescription] = React.useState('');

  const onDescriptionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  const onColorChange = (color: any) => {
    closeMenu();

    setColor(color.hex);
  };

  const onCreateClick = () => {
    createCategory(color, description);

    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle id="max-width-dialog-title">
        {translation('Create category')}
      </DialogTitle>

      <DialogContent className={classes.content}>
        <Paper className={classes.root} elevation={0}>
          <IconButton
            className={classes.iconButton}
            aria-label="Menu"
            onClick={openMenu}
          >
            <LabelIcon style={{ color: color }} />
          </IconButton>

          <TextField
            autoFocus
            className={classes.input}
            fullWidth
            id="description"
            margin="dense"
            onChange={onDescriptionChange}
            placeholder={translation('Description')}
            type="text"
            value={description}
          />
        </Paper>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {translation('Cancel')}
        </Button>

        <Button onClick={onCreateClick} color="primary">
          {translation('Create')}
        </Button>
      </DialogActions>

      <Popover
        open={openedMenu}
        anchorEl={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={classes.colorPicker}>
          <ColorPicker categories={categories} onChange={onColorChange} />
        </div>
      </Popover>
    </Dialog>
  );
};

export default CreateCategoryDialog;
