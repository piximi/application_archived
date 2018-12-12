import React, { Component } from 'react';
import styles from './UploadDialog.css';
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
import { store } from '../../index';
import { addImagesAction } from '../../actions/images';

// Add valid file formats here
const validFileExtensions = ['png'];

function createImage(bytes, pathname, checksum, currentFile) {
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
      images: []
    };
  }

  uploadImages = () => {
    const that = this;
    let imageFiles = [];

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
    const { onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">
          Upload directory with images
        </DialogTitle>

        <DialogContent>
          <Button>
            <input
              type="file"
              accept="image/*"
              ref={node => this._addDirectory(node)}
              onChange={this.onChange()}
            />
          </Button>
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadDialog);
