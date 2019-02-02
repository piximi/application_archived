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
import { toggleSpinnerAction } from '../../actions/settings';

// Add valid file formats here
const validFileExtensions = ['png'];

function createImage(bytes, pathname, checksum) {
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
  };
  img.src = bytes;
  return image;
}

const readFile = (currentFile, that, noImageFiles) => {
  const pathname = currentFile.webkitRelativePath;
  return e => {
    const bytes = e.target.result;
    const checksum = String(hash(bytes));
    const image = createImage(bytes, pathname, checksum, currentFile);
    that.imageData[checksum] = image;
    that.counter = that.counter + 1;
    if (that.counter === noImageFiles) {
      store.dispatch(toggleSpinnerAction());
      store.dispatch(addImagesAction(that.imageData));
      that.imageData = {};
      that.counter = 0;
    }
  };
};

function Transition(props) {
  return <Zoom {...props} />;
}

export class UploadDialog extends Component {
  constructor(props) {
    super(props);
    this.imageFiles = [];
    this.imageData = {};
    this.counter = 0;
    this.state = {
      images: [],
      snackbar: false
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
    let imageFiles = [];
    store.dispatch(addImagesAction([]));
    store.dispatch(toggleSpinnerAction());
    // Check images for correct file format
    for (let imageFile of this.state.imageFiles) {
      const fileExtension = imageFile.name.split('.').pop();
      if (validFileExtensions.includes(fileExtension))
        imageFiles.push(imageFile);
    }
    const noImageFiles = imageFiles.length;
    for (let imageFile of imageFiles) {
      const reader = new FileReader();
      reader.onload = readFile(imageFile, that, noImageFiles);
      reader.readAsDataURL(imageFile, that);
    }
  };

  onClickUploadButton = () => {
    this.uploadImages();
    this.props.onClose();
    this.toggleSnackbar();
  };

  onClickCancelButton = () => {
    this.setState({ images: [] });
    this.props.onClose();
  };

  onChange = () => e => {
    const imageFiles = e.target.files;
    this.setState({ imageFiles: imageFiles });
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
                Select Folder
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
