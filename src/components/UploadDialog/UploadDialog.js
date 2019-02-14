import React, { Component } from 'react';
import styles from './UploadDialog.css';
import className from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import hash from 'string-hash';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Zoom
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { store } from '../../index';
import { addImagesAction } from '../../actions/images';
import { addCategoriesAction } from '../../actions/categories';
import { toggleSpinnerAction } from '../../actions/settings';

// Add valid file formats here
const validFileExtensions = ['png'];

function allImagesLoaded(noImageFiles, loadedImages) {
  if (noImageFiles === loadedImages) return true;
  else return false;
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
      store.dispatch(addCategoriesAction([]));
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

function Transition(props) {
  return <Zoom {...props} />;
}

export class UploadDialog extends Component {
  constructor(props) {
    super(props);
    this.imageFiles = [];
    this.imageData = [];
    this.state = {
      uploadButtonActive: false,
      images: [],
      snackbar: false,
      selectFolderText: 'Select Folder'
    };
  }

  toggleSnackbar = () => {
    this.setState({
      ...this.state,
      snackbar: !this.state.snackbar
    });
  };

  uploadImages = () => {
    const that = this;
    let validImageFiles = [];
    store.dispatch(addImagesAction({}));
    store.dispatch(toggleSpinnerAction());
    this.setState({ imageFiles: [], uploadButtonActive: false });

    // Check images for correct file format
    for (let imageFile of this.state.imageFiles) {
      const fileExtension = imageFile.name.split('.').pop();
      if (validFileExtensions.includes(fileExtension))
        validImageFiles.push(imageFile);
    }
    const noValidImageFiles = validImageFiles.length;
    for (let imageFile of validImageFiles) {
      const reader = new FileReader();
      reader.onload = readFile(imageFile, that, noValidImageFiles);
      reader.readAsDataURL(imageFile, that);
    }
  };

  onClickUploadButton = () => {
    this.uploadImages();
    this.props.onClose();
    this.toggleSnackbar();
    this.setState({
      images: [],
      imageFiles: null,
      selectFolderText: 'Select Folder',
      uploadButtonActive: false
    });
  };

  onClickCancelButton = () => {
    this.props.onClose();
    this.setState({
      images: [],
      imageFiles: null,
      selectFolderText: 'Select Folder',
      uploadButtonActive: false
    });
  };

  onChange = () => e => {
    const imageFiles = e.target.files;
    let path = imageFiles[0].webkitRelativePath;
    let Folder = '/' + path.split('/')[0];
    this.setState({
      imageFiles: imageFiles,
      uploadButtonActive: true,
      selectFolderText: Folder
    });
  };

  _addDirectory(node) {
    if (node) {
      node.directory = true;
      node.webkitdirectory = true;
    }
  }

  render() {
    const { onClose, open, classes } = this.props;

    return (
      <React.Fragment>
        <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
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
              ref={node => this._addDirectory(node)}
              onChange={this.onChange()}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                color="primary"
                className={className(classes.bootstrapRoot)}
                component="span"
              >
                {this.state.selectFolderText}
                <FolderIcon className={className(classes.folderIcon)} />
              </Button>
            </label>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => this.onClickCancelButton()} color="primary">
              Cancel
            </Button>

            <Button onClick={() => this.onClickUploadButton()} color="primary">
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadDialog);
