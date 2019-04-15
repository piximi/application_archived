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

const EditCategoryDialog = props => {
  const [anchor, setAnchor] = React.useState(null);

  const [color, setColor] = React.useState('#FF0000');

  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setColor(props.color);
    setDescription(props.description);
  });

  function onColorChange(color, event) {
    setAnchor(null);

    setColor(color.hex);
  }

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
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <ButtonBase
                aria-haspopup="true"
                aria-owns={anchor ? 'create-category-color' : null}
                onClick={e => setAnchor(e.currentTarget)}
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
        </div>
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
        <div className={classes.colorPicker}>
          <ColorPicker categories={categories} onChange={onColorChange} />
        </div>
      </Popover>
    </Dialog>
  );
};

export default withStyles(styles, { withTheme: true })(EditCategoryDialog);
