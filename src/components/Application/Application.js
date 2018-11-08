import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ConnectedUploadDialog from '../../containers/ConnectedUploadDialog';
import VirtualizedGallery from '../VirtualizedGallery/Gallery';
import * as databaseAPI from '../../database';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      images: [],
      imagesMetaData: {}
    };
  }

  createImageCollection = () => {
    let identifier = null;
    let category = null;
    let categoryColor = 'white';
    const IMAGES = this.props.imagesMetadata.map(imageMetadata => {
      categoryColor = 'white';
      identifier = imageMetadata.identifier;
      category = this.findCategory(imageMetadata.category);
      if (category != null) {
        if (category.color != null) {
          categoryColor = category.color;
          category = category.identifier;
        }
      }
      return {
        id: identifier,
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        isSelected: false,
        category: category,
        color: categoryColor
      };
    });
    return IMAGES;
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
  };

  findCategory = identifier => {
    return this.props.categories.find(function(category) {
      return category.identifier === identifier;
    });
  };

  onSelectImage(index, image) {
    let images = this.state.images.slice();
    let img = images[index];
    if (img.hasOwnProperty('isSelected')) img.isSelected = !img.isSelected;
    else img.isSelected = true;
    this.setState({
      images: images
    });
  }

  asyncDatabaseRequest(id, that) {
    databaseAPI.indexeddb.images.get(id).then(function(result) {
      if (result) {
        that._asyncRequest = null;
        that.setState({ src: result.bytes });
      }
    });
  }

  render() {
    const {
      classes,
      settings,
      toggleUploadDialog,
      changeZoomLevel
    } = this.props;

    const IMAGES = this.createImageCollection();
    return (
      <div className={classes.appFrame}>
        <PrimaryAppBar
          toggle={this.onClick}
          toggled={this.state.open}
          changeZoomLevel={changeZoomLevel}
          zoomLevel={settings.zoomLevel}
        />
        <ConnectedSidebar toggle={this.onClick} toggled={this.state.open} />
        <main
          className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: this.state.open,
            [classes.contentShiftLeft]: this.state.open
          })}
        >
          <VirtualizedGallery
            images={IMAGES}
            imagesPerRow={10}
            decreaseWidth={this.state.open ? 240 + 30 : 0}
            asyncImgLoadingFunc={this.asyncDatabaseRequest}
          />

          <Tooltip id="tooltip-fab" title="Upload new image">
            <Button
              style={{ position: 'fixed' }}
              variant="fab"
              color="secondary"
              className={classes.fab}
              onClick={toggleUploadDialog}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </main>
        <ConnectedUploadDialog
          onClose={toggleUploadDialog}
          open={settings.upload.toggled}
        />
      </div>
    );
  }
}

Application.propTypes = {
  name: PropTypes.string
};

export default DragDropContext(HTML5Backend)(
  withStyles(styles, { withTheme: true })(Application)
);
