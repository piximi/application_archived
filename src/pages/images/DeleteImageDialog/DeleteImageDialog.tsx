import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const DeleteImageDialog = (props: any) => {
  const { onClose, open, selectedImages } = props;

  function onClickDeleteButton() {
    props.setSelectedImages([]);
    props.deleteImages(props.selectedImages);
    props.onClose();
  }

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

  const { t: translation } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          {translation('Cancel')}
        </Button>

        {noSelectedImages > 0 ? (
          <Button onClick={() => onClickDeleteButton()} color="primary">
            {translation('Delete')}
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  );
};
