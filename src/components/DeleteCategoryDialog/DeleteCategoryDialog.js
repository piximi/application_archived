import React, { Component } from 'react';
import styles from './DeleteCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui';

class DeleteCategoryDialog extends Component {
  render() {
    const {
      deleteCategory,
      description,
      toggleDeleteCategoryDialog,
      settings
    } = this.props;

    const dialogTitle = `Delete ${description}?`;

    const dialogContentText = `Images categorized as ${description} won’t be deleted.`;

    return (
      <Dialog
        open={settings.deleteCategory.toggled}
        onClose={toggleDeleteCategoryDialog}
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContentText}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleDeleteCategoryDialog} color="primary">
            Cancel
          </Button>

          <Button onClick={deleteCategory} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DeleteCategoryDialog);
