import React, { Component } from 'react';
import styles from './DeleteImageDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Zoom
} from '@material-ui/core';

function Transition(props) {
  return <Zoom {...props} />;
}

export class DeleteImageDialog extends Component {
  onClickCancelButton = () => {
    this.props.onClose();
  };

  onClickDeleteButton = () => {
    this.props.setSelectedImages([]);
    this.props.deleteImages(this.props.selectedImages);
    this.props.onClose();
  };

  render() {
    const { onClose, open, selectedImages } = this.props;
    const noSelectedImages = selectedImages.length;
    let title =
      noSelectedImages > 0
        ? 'Do you want to delete the ' + noSelectedImages + ' selected images?'
        : 'Please select images before clicking on this button';
    let text =
      noSelectedImages > 0
        ? 'Please confirm that you want to delete the currently selected images'
        : null;

    if (noSelectedImages === 1) {
      title = 'Do you want to delete the selected image';
      text = 'Please confirm you want to delete this image';
    }

    return (
      <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => this.onClickCancelButton()} color="primary">
            Cancel
          </Button>

          {noSelectedImages > 0 ? (
            <Button onClick={() => this.onClickDeleteButton()} color="primary">
              Delete
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DeleteImageDialog);
