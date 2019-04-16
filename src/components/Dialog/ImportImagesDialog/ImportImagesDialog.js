import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FileInput from '../../FileInput/FileInput';

const ImportImagesDialog = props => {
  const { createImage, onClose, open } = props;

  const onFileInputChange = image => {
    const { checksum, data } = image;

    createImage(checksum, data);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="form-dialog-title">
          Open directory with images
        </DialogTitle>

        <DialogContent>
          <FileInput onChange={onFileInputChange}>
            <Button variant="contained" color="primary" component="span">
              Select folder
              <FolderIcon />
            </Button>
          </FileInput>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>

          <Button onClick={onClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ImportImagesDialog;
