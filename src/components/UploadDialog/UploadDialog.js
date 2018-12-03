import React, { Component } from 'react';
import styles from './UploadDialog.css';
import { withStyles } from '@material-ui/core/styles';
import hash from 'string-hash';
import * as databaseAPI from '../../database';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Zoom
} from '@material-ui/core';

function createImage(bytes, pathname, checksum) {
  let image = {};
  let img = new Image();
  img.onload = function() {
    image['width'] = img.width;
    image['height'] = img.height;
    image['channels'] = 4; // This is true for PNG images
    image['category'] = null;
    image['probability'] = null;
    image['visible'] = true;
    image['identifier'] = String(checksum);
    image['filename'] = pathname;
    image['object_bounding_box_minimum_r'] = 0;
    image['object_bounding_box_minimum_c'] = 0;
  };
  img.src = bytes;
  return image;
}

const readFile = (currentFile, that) => {
  const pathname = currentFile.webkitRelativePath;
  return e => {
    const bytes = e.target.result;
    const checksum = hash(bytes);
    const image = createImage(bytes, pathname, checksum);
    that.imageData.imageDataIndexedDB.push({
      checksum: checksum,
      bytes: bytes
    });
    that.imageData.imageDataReduxStore.push(image);
    that.counter = that.counter + 1;
    if (that.counter === that.state.imageFiles.length) {
      databaseAPI.saveData(
        that.imageData.imageDataIndexedDB,
        that.imageData.imageDataReduxStore
      );
      that.imageData = { imageDataReduxStore: [], imageDataIndexedDB: [] };
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
    this.imageData = { imageDataReduxStore: [], imageDataIndexedDB: [] };
    this.counter = 0;
    this.state = {
      images: []
    };
  }

  uploadImages = () => {
    let that = this;
    for (let imageFile of this.state.imageFiles) {
      const reader = new FileReader();
      reader.onload = readFile(imageFile, that);
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
