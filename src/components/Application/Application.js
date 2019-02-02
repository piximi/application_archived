import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { PacmanLoader } from 'react-spinners';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Gallery from '../Gallery/Gallery';

function createImageCollection(images, categories) {
  const IMAGES = Object.values(images).map(image => {
    let category = findCategory(image.category, categories);
    let categoryColor = 'white';
    if (category !== undefined) {
      categoryColor = category.color;
      category = category.identifier;
    }
    return { ...image, category: category, color: categoryColor };
  });
  return IMAGES;
}

function findCategory(identifier, categories) {
  return categories.find(function(category) {
    return category.identifier === identifier;
  });
}

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImages: [],
      open: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    const images = createImageCollection(props.images, props.categories);
    return { images: images };
  }

  setSelectedImages = selectedImages => {
    this.setState({ selectedImages: selectedImages });
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
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

  setUnlabelledVisibility = value => {
    this.setState({ displayUnlabeled: value });
  };

  render() {
    const { classes, updateImageCategory, spinnerActive } = this.props;
    const { images, selectedImages } = this.state;
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
            images={images}
            selectedImages={selectedImages}
            imagesPerRow={10}
            decreaseWidth={this.state.open ? 280 + 24 : 24}
            callOnDragEnd={updateImageCategory}
            setSelectedImages={this.setSelectedImages}
          />

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
