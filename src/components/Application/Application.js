import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Tooltip } from '@material-ui/core';
import LabelOffOutlinedIcon from '@material-ui/icons/LabelOffOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ConnectedUploadDialog from '../../containers/ConnectedUploadDialog';
import VirtualizedGallery from '../Gallery/Gallery';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      displayUnlabeled: true
    };
  }

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

  createImageCollection = () => {
    let identifier = null;
    let category = null;
    let categoryColor = 'white';
    let src = null;
    let brightness = 100;
    const IMAGES = this.props.imagesMetadata.map(imageMetadata => {
      categoryColor = 'white';
      identifier = imageMetadata.identifier;
      category = this.findCategory(imageMetadata.category);
      brightness = imageMetadata.brightness;
      src = imageMetadata.src;
      if (category != null) {
        if (category.color != null) {
          categoryColor = category.color;
          category = category.identifier;
        }
      }
      // if (this.state.imgSources !== null) {
      //   src = this.state.imgSources[identifier];
      // }
      return {
        src: src,
        id: identifier,
        isSelected: false,
        category: category,
        color: categoryColor,
        brightness: brightness
      };
    });
    return IMAGES;
  };

  setUnlabelledVisibility = value => {
    this.setState({ displayUnlabeled: value });
  };

  render() {
    const {
      classes,
      settings,
      toggleUploadDialog,
      changeZoomLevel,
      updateImageCategory,
      updateUnlabeledVisibility
    } = this.props;
    const IMAGES = this.createImageCollection();
    return (
      <div className={classes.appFrame}>
        <PrimaryAppBar
          toggle={this.onClick}
          toggled={this.state.open}
          changeZoomLevel={changeZoomLevel}
          zoomLevel={settings.zoomLevel}
          toggleUploadDialog={toggleUploadDialog}
        />
        <ConnectedSidebar
          toggle={this.onClick}
          toggled={this.state.open}
          setUnlabelledVisibility={this.setUnlabelledVisibility}
        />
        <main
          className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: this.state.open,
            [classes.contentShiftLeft]: this.state.open
          })}
        >
          <div className={classes.drawerHeader} />

          <VirtualizedGallery
            images={IMAGES}
            imagesPerRow={10}
            decreaseWidth={this.state.open ? 240 + 24 : 24}
            callOnDragEnd={updateImageCategory}
          />

          <Tooltip
            title={
              (this.state.displayUnlabeled ? 'Hide' : 'Show') +
              ' unlabeled images'
            }
          >
            <Button
              style={{ position: 'fixed', zIndex: 1202 }}
              variant="fab"
              color="secondary"
              className={
                this.state.displayUnlabeled
                  ? classes.unlabeledToggled
                  : classes.unlabeledUntoggled
              }
              onClick={() => {
                updateUnlabeledVisibility();
                this.setState({
                  displayUnlabeled: !this.state.displayUnlabeled
                });
              }}
            >
              {this.state.displayUnlabeled ? (
                <LabelOffOutlinedIcon />
              ) : (
                <LabelOutlinedIcon />
              )}
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
