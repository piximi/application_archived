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
  TextField
} from 'material-ui';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';

class CreateCategoryDialog extends Component {
  state = {
    anchor: null
  };

  handleClick = event => {
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
    const { classes, onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <IconButton
                  aria-haspopup="true"
                  aria-owns={this.state.anchor ? 'simple-menu' : null}
                  onClick={this.handleClick}
                >
                  <LabelOutlineIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <TextField id="input-with-icon-grid" label="Category" />
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
            onClick={() =>
              onClose('Create', document.getElementById('name-simple'))
            }
          >
            Create
          </Button>
        </DialogActions>

        <Menu
          anchorEl={this.state.anchor}
          id="create-category-color-menu"
          onClose={this.closeCreateCategoryColorMenu}
          open={Boolean(this.state.anchor)}
        >
          <MenuItem onClick={this.closeCreateCategoryColorMenu}>
            &nbsp;
          </MenuItem>
        </Menu>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateCategoryDialog);
