import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import * as API from '../classifier';
import ConnectedGallery from '../containers/ConnectedGallery';
import ConnectedPrimary from '../containers/ConnectedPrimary';
import ConnectedSidebar from '../containers/ConnectedSidebar';

class Classifier extends Component {
  save = () => {
    console.log('save');
  };

  open = files => {
    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = stream => {
      const result = JSON.parse(stream.target.result);
      this.props.fileImport(result);
    };
  };

  upload = (images, imageByteStrings) => {
    this.props.createImageAction(images, imageByteStrings);
  };
  findCategory = identifier => {
    return this.props.categories.find(function(category) {
      return category.identifier === identifier;
    });
  };

  train = () => {
    return API.trainOnRun(this.props);
  };

  render() {
    const { classes, images, settings } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <ConnectedPrimary
            save={this.save}
            open={this.open}
            content={this.state}
          />

          <Grid container spacing={0}>
            <ConnectedSidebar open={this.open} save={this.save} />

            <ConnectedGallery
              findCategory={this.findCategory}
              images={images}
              settings={settings}
            />
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Classifier);
