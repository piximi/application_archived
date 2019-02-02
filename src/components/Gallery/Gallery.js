import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Items from './Items.js';
import SelectionBox from './SelectionBox.js';
import CustomDragLayer from './CustomDragLayer';
import { collisionDetection } from './helper.js';

class Gallery extends PureComponent {
  constructor() {
    super();
    this.state = {
      selected: [],
      collisions: [],
      selectionBoxCoordinates: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      selectionBoxVisibility: 'hidden',
      currentlyDraggedItem: null,
      shiftKeyPressed: false,
      mouseDown: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
    document.addEventListener('keyup', this.keyEvent);
  }

  onmousedown = e => {
    let currentSelectionBoxCoordinates = {
      ...this.state.selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x1 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y1 = e.clientY; //Set the initial Y
    currentSelectionBoxCoordinates.x2 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y2 = e.clientY; //Set the initial Y
    this.setState({
      mouseDown: true,
      selectionBoxCoordinates: currentSelectionBoxCoordinates
    });
    // Only activate selection box when not dragging on a selectable item
    if (e.target.getAttribute('type') !== 'selectableElement') {
      this.setState({ selectionBoxVisibility: 'visible' });
    }
  };

  onmousemove = e => {
    // Always update coordinates based on mouse position
    let currentSelectionBoxCoordinates = {
      ...this.state.selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x2 = e.clientX;
    currentSelectionBoxCoordinates.y2 = e.clientY;
    if (this.state.mouseDown) {
      this.setState({
        selectionBoxCoordinates: currentSelectionBoxCoordinates
      });
    }
    // Only check for collisions if selection box is active
    if (this.state.selectionBoxVisibility === 'visible') {
      const collisions = collisionDetection(currentSelectionBoxCoordinates);
      this.setState({ selected: collisions, collisions: collisions });
      this.props.setSelectedImages(collisions);
    }
  };

  onmouseup = e => {
    // Check if no collisions occured and mouseup event is outside of a selectable item
    if (
      e.target.getAttribute('type') !== 'selectableElement' &&
      this.state.collisions.length === 0
    ) {
      // if so unselect all items
      this.setState({ selected: [] });
      this.props.setSelectedImages([]);
    }
    // Hide selection box und reset collisions
    this.setState({
      mouseDown: false,
      selectionBoxVisibility: 'hidden',
      collisions: []
    });
  };

  selectItem = imgId => {
    // Check if clicked on an already selected item
    if (this.state.selected.includes(imgId)) {
      return;
    }
    // Check if shiftkey is pressed
    if (this.state.shiftKeyPressed) {
      let copySelected = [...this.state.selected];
      copySelected.push(imgId);
      this.setState({ selected: copySelected });
      this.props.setSelectedImages(copySelected);
    } else {
      this.props.setSelectedImages([imgId]);
      this.setState({ selected: [imgId] });
    }
  };

  setCurrentlyDraggedItem = value => {
    // if item is dragged value = imgId otherwise value = null
    this.setState({ currentlyDraggedItem: value });
  };

  keyEvent = e => {
    this.setState({ shiftKeyPressed: e.shiftKey });
  };

  render() {
    const { images, imagesPerRow, decreaseWidth, callOnDragEnd } = this.props;
    // Check if no images are visible or available
    if (images.length === 0) return null;
    return (
      <div
        className="container noselect"
        onMouseDown={this.onmousedown}
        onMouseMove={this.onmousemove}
        onMouseUp={this.onmouseup}
      >
        <CustomDragLayer draggedItem={this.state.currentlyDraggedItem} />
        <SelectionBox
          selectionBoxCoordinates={this.state.selectionBoxCoordinates}
          visibility={this.state.selectionBoxVisibility}
        />
        <Items
          images={images}
          imagesPerRow={imagesPerRow}
          decreaseWidth={decreaseWidth}
          selectItem={this.selectItem}
          selectedItems={this.state.selected}
          ondrag={this.setCurrentlyDraggedItem}
          callOnDragEnd={callOnDragEnd}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  imagesPerRow: PropTypes.number,
  decreaseWidth: PropTypes.number,
  setSelectedImages: PropTypes.func,
  callOnDragEnd: PropTypes.func
};

Gallery.defaultProps = {
  decreaseWidth: 0,
  imagesPerRow: 10
};

export default Gallery;
