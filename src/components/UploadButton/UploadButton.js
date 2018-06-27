import React, { Component } from 'react';
import Button from 'material-ui/Button';
import hash from 'string-hash';
import { database } from '../../database';

class FileInput extends Component {
  images = [];
  imageByteStrings = {};

  createImage = (checksum, data) => {
    database.images.put({
      checksum: checksum,
      data: data
    });
  };

  onChange = () => e => {
    this.images = [];

    this.imageByteStrings = [];

    const images = e.target.files;

    const count = images.length;

    for (let image of images) {
      const reader = new FileReader();

      reader.onload = (function(theFile, that) {
        const pathname = theFile.webkitRelativePath;

        return function(e) {
          const checksum = hash(e.target.result);

          const data = e.target.result;

          that.images.push({
            category: null,
            probability: null,
            visible: true,
            identifier: checksum,
            filename: pathname
          });

          that.createImage(checksum, data);

          that.imageByteStrings[checksum] = data;

          if (that.images.length === count) {
            that.props.createImageAction(that.images, that.imageByteStrings);
          }
        };
      })(image, this);

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
    return (
      <Button variant="raised" component="label">
        <input
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          onChange={this.onChange()}
          ref={node => this._addDirectory(node)}
        />
        UPLOAD IMAGES
      </Button>
    );
  }
}

export default FileInput;
