import React, { Component } from 'react';
import hash from 'string-hash';
import styles from './UploadDialog.css';
import { withStyles } from 'material-ui/styles/index';
import * as databaseAPI from '../../database';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui';

class UploadDialog extends Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.state = {
      imageDataArray: [],
      imageDataMap: {},
      doneReading: false
    };
  }

  onClickUploadButton = () => {
    for (let key in this.state.imageDataMap) {
      databaseAPI.saveToDatabase(key, this.state.imageDataMap[key]);
    }
    this.saveToReduxStore(this.state.imageDataArray);
    this.setState({ doneReading: false, imageDataArray: [], imageDataMap: {} });
    this.props.onClose();
  };

  onClickCancelButton = () => {
    this.setState({ doneReading: false, imageDataArray: [], imageDataMap: {} });
    this.props.onClose();
  };
  // Save image byte string to inxdexedDB
  saveToDatabase = (checksum, imageData) => {
    databaseAPI.saveToDatabase(checksum, imageData);
  };

  //Save image data to Redux store
  saveToReduxStore = image => {
    this.props.createImageAction(image);
  };

  onChange = () => e => {
    const images = e.target.files;
    const numberImages = images.length;
    let counter = 0;
    let imagesArray = [];
    let imagesMap = {};

    // Read read data from uploaded files
    for (let image of images) {
      const reader = new FileReader();
      reader.onload = (myFile => {
        const pathname = myFile.webkitRelativePath;
        return e => {
          // Create unique identifier for image
          const checksum = hash(e.target.result);
          const imageData = e.target.result;
          // Create image
          const image = {
            category: null,
            probability: null,
            visible: true,
            identifier: String(checksum),
            filename: pathname
          };
          imagesArray.push(image);
          imagesMap[String(checksum)] = imageData;
          counter = counter + 1;

          if (counter === numberImages) {
            this.setState({
              doneReading: true,
              imageDataArray: imagesArray,
              imageDataMap: imagesMap
            });
            imagesArray = [];
            imagesMap = {};
          }
        };
      })(image);
      reader.readAsDataURL(image);
    }
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

          <Button
            disabled={!this.state.doneReading}
            onClick={() => this.onClickUploadButton()}
            color="primary"
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadDialog);
