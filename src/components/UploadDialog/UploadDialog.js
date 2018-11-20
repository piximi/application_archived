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
  DialogTitle
} from '@material-ui/core';

function createImage(pathname, checksum) {
  return {
    category: null,
    probability: null,
    visible: true,
    identifier: String(checksum),
    filename: pathname
  };
}

const readFile = (currentFile, that) => {
  const pathname = currentFile.webkitRelativePath;
  return e => {
    const bytes = e.target.result;
    const checksum = hash(bytes);
    const image = createImage(pathname, checksum);
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
      if (imageFile.name !== '.DS_Store') {
        console.log(true);
        const reader = new FileReader();
        reader.onload = readFile(imageFile, that);
        reader.readAsDataURL(imageFile, that);
      } else {
        console.log(false);
      }
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
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="form-dialog-title">
          Upload file or directory
        </DialogTitle>

        <DialogContent>
          <input
            type="file"
            accept="image/*"
            ref={node => this._addDirectory(node)}
            onChange={this.onChange()}
          />
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
