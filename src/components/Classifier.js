import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import * as API from '../classifier';
import ConnectedGallery from '../containers/ConnectedGallery';
import Primary from './Primary';
import Sidebar from './Sidebar';

class Classifier extends Component {
  save = () => {
    console.log('save');
  };

  open = event => {
    const reader = new FileReader();

    reader.readAsText(event.target.files[0]);

    reader.onload = stream => {
      this.setState(JSON.parse(stream.target.result));
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
    return API.trainOnRun(this.state);
  };

  render() {
    const { classes, settings } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <Primary
            upload={this.upload}
            save={this.save}
            open={this.open}
            content={this.state}
            train={this.train}
          />

          <Grid container spacing={0}>
            <Sidebar />

            <ConnectedGallery
              findCategory={this.findCategory}
              settings={settings}
            />
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles)(Classifier);
