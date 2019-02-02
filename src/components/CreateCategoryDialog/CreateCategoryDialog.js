import React, { Component } from 'react';
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
import ColorPicker from '../ColorPicker/ColorPicker';
import { colors } from '../../constants';

function Transition(props) {
  return <Zoom {...props} />;
}

class CreateCategoryDialog extends Component {
  state = {
    anchor: null,
    color: '#00e676',
    description: ''
  };

  componentDidUpdate(prevProps, prevState) {
    const prevUsedColors = prevProps.categories.map(category => {
      if (category.color === undefined) return null;
      return category.color.toUpperCase();
    });

    // Use default color when runnning out of colors
    if (prevUsedColors.length > colors.length) return;

    const usedColors = this.props.categories.map(category =>
      category.color.toUpperCase()
    );
    const availableColors = colors.filter(
      color => !usedColors.includes(color.toUpperCase())
    );
    if (JSON.stringify(prevUsedColors) !== JSON.stringify(usedColors)) {
      let color =
        availableColors[Math.floor(Math.random() * availableColors.length)];
      this.setState({ color: color });
    }
  }

  onColorChange = (color, event) => {
    this.setState({
      ...this.state,
      anchor: null,
      color: color.hex
    });
  };

  onDescriptionChange = event => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  openCreateCategoryColorMenu = event => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  closePopover = () => {
    this.setState({
      description: '',
      anchor: null
    });
  };

  createCategory = (color, description) => {
    this.props.createCategory(color, description);
    this.onClose();
  };

  onClose = () => {
    this.setState({ description: '' });
    this.props.onClose();
  };

  render() {
    const { classes, open, categories } = this.props;

    return (
      <Dialog open={open} TransitionComponent={Transition}>
        <DialogContent>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <ButtonBase
                  aria-haspopup="true"
                  aria-owns={this.state.anchor ? 'create-category-color' : null}
                  onClick={this.openCreateCategoryColorMenu}
                  style={{
                    color: this.state.color
                  }}
                >
                  <LabelIcon />
                </ButtonBase>
              </Grid>

              <Grid item>
                <TextField
                  id="create-category-description"
                  label="Description"
                  onChange={this.onDescriptionChange}
                  value={this.state.description}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={this.onClose}>
            Cancel
          </Button>

          <Button
            color="primary"
            onClick={() =>
              this.createCategory(this.state.color, this.state.description)
            }
          >
            Create category
          </Button>
        </DialogActions>

        <Popover
          open={Boolean(this.state.anchor)}
          anchorEl={this.state.anchor}
          onClose={this.closePopover}
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
            <ColorPicker
              categories={categories}
              onChange={this.onColorChange}
            />
          </div>
        </Popover>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateCategoryDialog);
