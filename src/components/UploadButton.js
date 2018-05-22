import React, { Component } from 'react';
import Button from 'material-ui/Button';
import hash from 'string-hash';

class FileInput extends Component {
  images = [];
  imageByteStrings = {};

  // Reads data from input
  handleChange = files => {
    this.images = [];
    this.imageByteStrings = [];
    var count = files.length; // total number of files
    for (let i = 0; i < count; i++) {
      const reader = new FileReader();
      const image = files[i];
      reader.onload = (function(theFile, my) {
        const fileName = theFile.webkitRelativePath;
        return function(e) {
          let identifier = hash(e.target.result);
          my.images.push({
            category: null,
            identifier: identifier,
            filename: fileName
          });
          my.imageByteStrings[identifier] = e.target.result;

          if (my.images.length === count) {
            my.props.createImageAction(my.images, my.imageByteStrings);
          }
        };
      })(image, this);
      // Read in the image file as a data URL.
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
          onChange={e => this.handleChange(e.target.files)}
          ref={node => this._addDirectory(node)}
        />
        UPLOAD IMAGES
      </Button>
    );
  }
}

export default FileInput;
