import * as React from 'react';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Paper,
  IconButton,
  Divider,
  InputBase,
  Popover,
  DialogTitle
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ColorPicker from '../../ColorPicker/ColorPicker';
import useMenu from '../../../hooks/Menu';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import styles from './EditCategoryDialog.css';

const useStyles = makeStyles(styles);

const EditCategoryDialog = (props: any) => {
  const {
    category,
    updateColor,
    updateDescription,
    onClose,
    open,
    categories
  } = props;

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const [color, setColor] = React.useState<string>(category.color);

  const [description, setDescription] = React.useState<string>(
    category.description
  );

  const classes = useStyles();

  const onColorChange = (color: any) => {
    closeMenu();

    setColor(color.hex);
  };

  const onSaveClick = (): void => {
    onClose();

    updateColor(category.index, color);

    updateDescription(category.index, description);
  };

  const onTextFieldChange = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  const { t: translation } = useTranslation();

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle id="max-width-dialog-title">
        {translation('Edit category')}
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
            onChange={onTextFieldChange}
            placeholder={category.description}
            type="text"
            value={description}
          />
        </Paper>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {translation('Cancel')}
        </Button>

        <Button onClick={onSaveClick} color="primary">
          {translation('Edit')}
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

export default EditCategoryDialog;
