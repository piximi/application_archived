import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const DeleteCategoryDialog = (props: any) => {
  const {
    category,
    deleteCategory,
    description,
    open,
    onClose
  } = props;

  const onDeleteCategoryClick = () => {
    deleteCategory(category.index);
  };

  const dialogTitle = `Delete ${description}?`;

  const dialogContentText = `Images categorized as ${description} won’t be deleted.`;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContentText}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button
          onClick={onDeleteCategoryClick}
          color="primary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryDialog;
