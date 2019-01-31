import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Fab, Tooltip } from '@material-ui/core';
import LabelOffOutlinedIcon from '@material-ui/icons/LabelOffOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { PacmanLoader } from 'react-spinners';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Gallery from '../Gallery/Gallery';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: [],
      open: true,
      displayUnlabeled: true
    };
  }

  setSelectedImages = selectedImages => {
    this.setState({ selectedImages: selectedImages });
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

  createImageCollection = () => {
    const IMAGES = Object.values(this.props.images).map(image => {
      let category = this.findCategory(image.category);
      let categoryColor = 'white';
      if (category !== undefined) {
        categoryColor = category.color;
        category = category.identifier;
      }
      return { ...image, category: category, color: categoryColor };
    });
    return IMAGES;
  };

  setUnlabelledVisibility = value => {
    this.setState({ displayUnlabeled: value });
  };

  render() {
    const {
      classes,
      updateImageCategory,
      updateUnlabeledVisibility,
      spinnerActive
    } = this.props;

    console.log(spinnerActive);

    const { selectedImages } = this.state;

    const IMAGES = this.createImageCollection();

    return (
      <div className={classes.appFrame}>
        <PrimaryAppBar
          selectedImages={selectedImages}
          setSelectedImages={this.setSelectedImages}
          toggle={this.onClick}
          toggled={this.state.open}
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

          <Gallery
            images={IMAGES}
            selectedImages={selectedImages}
            imagesPerRow={10}
            decreaseWidth={this.state.open ? 280 + 24 : 24}
            callOnDragEnd={updateImageCategory}
            setSelectedImages={this.setSelectedImages}
          />

          <Tooltip
            title={
              (this.state.displayUnlabeled ? 'Hide' : 'Show') +
              ' unlabeled images'
            }
          >
            <Fab
              style={{ position: 'fixed' }}
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
            </Fab>
          </Tooltip>
          <div className={classes.pacmanLoader}>
            <PacmanLoader
              sizeUnit={'px'}
              size={32}
              color={'#6bd3b8'}
              loading={spinnerActive}
            />
          </div>
        </main>
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
