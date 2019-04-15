import * as React from 'react';
import styles from './EditCategoryDialog.css';
import { withStyles } from '@material-ui/core/styles';
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

const EditCategoryDialog = (props: any) => {
  const [anchor, setAnchor] = React.useState(null);

  const [color, setColor] = React.useState('#FF0000');

  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setColor(props.color);
    setDescription(props.description);
  });

  function onColorChange(color: any, event: any) {
    setAnchor(null);

    setColor(color.hex);
  }

  const onClick = (e: any) => {
    setAnchor(e.currentTarget)
  };

  const {
    classes,
    updateCategory,
    onClose,
    open,
    categoryId,
    categories
  } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <ButtonBase
              onClick={onClick}
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
              label="Description"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            onClose();
            updateCategory(categoryId, description, color);
          }}
        >
          Save
        </Button>
      </DialogActions>

      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div>
          <ColorPicker categories={categories} onChange={onColorChange} />
        </div>
      </Popover>
    </Dialog>
  );
};

export default EditCategoryDialog;
