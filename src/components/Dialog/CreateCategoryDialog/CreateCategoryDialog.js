import * as React from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Popover,
  Zoom
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ColorPicker from '../../ColorPicker/ColorPicker';
import { colors } from '../../../constants';
import { useTranslation } from 'react-i18next';

function Transition(props) {
  return <Zoom {...props} />;
}

const CreateCategoryDialog = props => {
  const { classes, open, categories } = props;

  const { t: translation } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState();
  const [color, setColor] = React.useState('#00e676');
  const [description, setDescription] = React.useState('');

  const prevPropsRef = React.useRef();

  React.useEffect(() => {
    prevPropsRef.current = props;

    const prevUsedColors = prevPropsRef.current.categories.map(category => {
      if (category.color === undefined) return null;
      return category.color.toUpperCase();
    });

    // Use default color when runnning out of colors
    if (prevUsedColors.length > colors.length) return;

    const usedColors = categories.map(category => category.color.toUpperCase());

    const availableColors = colors.filter(
      color => !usedColors.includes(color.toUpperCase())
    );

    if (JSON.stringify(prevUsedColors) !== JSON.stringify(usedColors)) {
      let color =
        availableColors[Math.floor(Math.random() * availableColors.length)];

      setColor(color);
    }
  });

  const onColorChange = (color, event) => {
    setAnchorEl();
    setColor(color.hex);
  };

  const onDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const openCreateCategoryColorMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setDescription('');
    setAnchorEl(null);
  };

  const createCategory = (color, description) => {
    props.createCategory(color, description);
    onClose();
  };

  const onClose = () => {
    setDescription('');
    props.onClose();
  };

  return (
    <Dialog open={open} TransitionComponent={Transition}>
      <DialogContent>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <ButtonBase
                aria-haspopup="true"
                aria-owns={anchorEl ? 'create-category-color' : null}
                onClick={openCreateCategoryColorMenu}
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
                label={translation('Description')}
                onChange={onDescriptionChange}
                value={description}
              />
            </Grid>
          </Grid>
        </div>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={onClose}>
          {translation('Cancel')}
        </Button>

        <Button
          color="primary"
          onClick={() => createCategory(color, description)}
        >
          {translation('Create category')}
        </Button>
      </DialogActions>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopover}
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

export default withStyles(styles, { withTheme: true })(CreateCategoryDialog);
