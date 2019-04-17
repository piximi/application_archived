import * as React from 'react';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Popover
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ColorPicker from '../../ColorPicker/ColorPicker';
import useMenu from '../../../hooks/Menu';
import { useTranslation } from 'react-i18next';

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

  const [color, setColor] = React.useState<string>('#FF0000');

  const [description, setDescription] = React.useState<string>('');

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

  const { t } = useTranslation();

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <ButtonBase
              onClick={openMenu}
              style={{
                color: color
              }}
            >
              <LabelIcon />
            </ButtonBase>
          </Grid>

          <Grid item>
            <TextField
              id="create-category-description"
              label={t('Description')}
              onChange={onTextFieldChange}
              value={description}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={onClose}>
          {t('Cancel')}
        </Button>

        <Button color="primary" onClick={onSaveClick}>
          {t('Save')}
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
        <ColorPicker categories={categories} onChange={onColorChange} />
      </Popover>
    </Dialog>
  );
};

export default EditCategoryDialog;
