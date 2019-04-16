import * as React from 'react';
import styles from './ImportImagesDialog.css';
import className from 'classnames';
import hash from 'string-hash';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { store } from '../../../index';
import { addImagesAction } from '../../../actions/images';
import { addCategoryAction } from '../../../reducers/categories';
import { toggleSpinnerAction } from '../../../actions/settings';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

// Add valid file formats here
const validFileExtensions = ['png'];

function allImagesLoaded(noImageFiles, loadedImages) {
  return noImageFiles === loadedImages;
}

function createImage(bytes, pathname, checksum, noImageFiles, that) {
  let image = {};
  let img = new Image();
  img.onload = function() {
    image['id'] = checksum;
    image['src'] = bytes;
    image['width'] = img.width;
    image['height'] = img.height;
    image['channels'] = 4; // This is true for PNG images
    image['category'] = null;
    image['probability'] = null;
    image['visible'] = true;
    image['pathname'] = pathname;
    image['object_bounding_box_minimum_r'] = 0;
    image['object_bounding_box_minimum_c'] = 0;
    image['brightness'] = 100;
    image['contrast'] = 100;
    image['unselectedChannels'] = [];
    that.imageData.push(image);
    if (allImagesLoaded(noImageFiles, that.imageData.length)) {
      store.dispatch(toggleSpinnerAction());
      store.dispatch(addCategoryAction([]));
      const newImageData = {};
      for (let image of that.imageData) {
        newImageData[image.id] = image;
      }
      store.dispatch(addImagesAction(newImageData));
      that.imageData = [];
    }
  };
  img.src = bytes;
}

const readFile = (currentFile, that, noImageFiles) => {
  const pathname = currentFile.webkitRelativePath;
  return e => {
    const bytes = e.target.result;
    const checksum = String(hash(bytes));
    createImage(bytes, pathname, checksum, noImageFiles, that);
  };
};

const ImportImagesDialog = props => {
  const { onClose, open } = props;

  const classes = useStyles();

  const [uploadButtonActive, setUploadButtonActive] = React.useState(false);
  const [selectFolderText, setSelectFolderText] = React.useState(
    'Select Folder'
  );
  const [images, setImages] = React.useState([]);
  const [imageFiles, setImageFiles] = React.useState([]);
  const [imageData, setImageData] = React.useState([]);

  const uploadImages = () => {
    // const that = this;
    let validImageFiles = [];
    store.dispatch(addImagesAction({}));
    store.dispatch(toggleSpinnerAction());

    setImageFiles([]);
    setUploadButtonActive(false);

    // Check images for correct file format
    for (let imageFile of imageFiles) {
      const extension = imageFile.name.split('.').pop();

      if (validFileExtensions.includes(extension)) {
        validImageFiles.push(imageFile);
      }
    }

    const noValidImageFiles = validImageFiles.length;

    for (let imageFile of validImageFiles) {
      const reader = new FileReader();

      // reader.onload = readFile(imageFile, that, noValidImageFiles);

      // reader.readAsDataURL(imageFile, that);
    }
  };

  const onClickUploadButton = () => {
    uploadImages();

    onClose();

    setImages([]);
    setImageFiles(null);
    setSelectFolderText('Select Folder');
    setUploadButtonActive(false);
  };

  const onClickCancelButton = () => {
    onClose();

    setImages([]);
    setImageFiles(null);
    setSelectFolderText('Select Folder');
    setUploadButtonActive(false);
  };

  const onImportImagesChange = e => {
    const imageFiles = e.target.files;
    let path = imageFiles[0].webkitRelativePath;
    let Folder = '/' + path.split('/')[0];

    setImageFiles(imageFiles);
    setUploadButtonActive(true);
    setSelectFolderText(Folder);
  };

  const _addDirectory = node => {
    if (node) {
      node.directory = true;
      node.webkitdirectory = true;
    }
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="form-dialog-title">
          Open directory with images
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <input
            accept="image/*"
            className={classes.input}
            id="raised-button-file"
            multiple
            type="file"
            ref={node => _addDirectory(node)}
            onChange={onImportImagesChange}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              color="primary"
              className={className(classes.bootstrapRoot)}
              component="span"
            >
              {selectFolderText}
              <FolderIcon className={className(classes.folderIcon)} />
            </Button>
          </label>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClickCancelButton} color="primary">
            Cancel
          </Button>

          <Button onClick={onClickUploadButton} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ImportImagesDialog;
