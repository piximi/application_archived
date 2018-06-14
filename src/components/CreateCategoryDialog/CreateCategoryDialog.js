import React, { Component } from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Popover,
  Typography
} from 'material-ui';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import ColorPicker from '../ColorPicker/ColorPicker';

class CreateCategoryDialog extends Component {
  state = {
    anchor: null
  };

  openCreateCategoryColorMenu = event => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  closeCreateCategoryColorMenu = () => {
    this.setState({
      anchor: null
    });
  };

  render() {
    const { classes, createCategory, onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <IconButton
                  aria-haspopup="true"
                  aria-owns={
                    this.state.anchor ? 'create-category-color-menu' : null
                  }
                  onClick={this.openCreateCategoryColorMenu}
                >
                  <LabelOutlineIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <TextField id="create-category-description" label="Category" />
              </Grid>
            </Grid>
          </div>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>

          <Button color="primary" onClick={createCategory}>
            Create
          </Button>
        </DialogActions>

        <Popover
          open={Boolean(this.state.anchor)}
          anchorEl={this.state.anchor}
          onClose={this.closeCreateCategoryColorMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <ColorPicker />
        </Popover>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateCategoryDialog);
