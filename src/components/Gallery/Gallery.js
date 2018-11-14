import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Items from './Items.js';
import SelectionBox from './SelectionBox.js';
import CustomDragLayer from './CustomDragLayer';
import { collisionDetection } from './helper.js';

class Gallery extends Component {
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
      shiftKeyPressed: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
    document.addEventListener('keyup', this.keyEvent);
  }

  onmousedown = e => {
    // Only activate selection box when not dragging on a selectable item
    if (e.target.getAttribute('type') !== 'selectableElement') {
      this.setState({ selectionBoxVisibility: 'visible' });
      let currentselectionBoxCoordinates = {
        ...this.state.selectionBoxCoordinates
      };
      currentselectionBoxCoordinates.x1 = e.clientX; //Set the initial X
      currentselectionBoxCoordinates.y1 = e.clientY; //Set the initial Y
      this.setState({
        selectionBoxCoordinates: currentselectionBoxCoordinates
      });
    }
  };

  onmousemove = e => {
    // Always update coordinates based on mouse position
    let currentselectionBoxCoordinates = {
      ...this.state.selectionBoxCoordinates
    };
    currentselectionBoxCoordinates.x2 = e.clientX;
    currentselectionBoxCoordinates.y2 = e.clientY;
    this.setState({ selectionBoxCoordinates: currentselectionBoxCoordinates });
    // Only check for collisions if selection box is active
    if (this.state.selectionBoxVisibility === 'visible') {
      const collisions = collisionDetection(currentselectionBoxCoordinates);
      this.setState({ selected: collisions, collisions: collisions });
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
    }
    // Hide selection box und reset collisions
    this.setState({ selectionBoxVisibility: 'hidden', collisions: [] });
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
    } else this.setState({ selected: [imgId] });
  };

  setCurrentlyDraggedItem = value => {
    // if item is dragged value = imgId otherwise value = null
    this.setState({ currentlyDraggedItem: value });
  };

  keyEvent = e => {
    this.setState({ shiftKeyPressed: e.shiftKey });
  };

  render() {
    const {
      images,
      imagesPerRow,
      asyncImgLoadingFunc,
      decreaseWidth,
      callOnDragEnd
    } = this.props;

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
          asyncImgLoadingFunc={asyncImgLoadingFunc}
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
  asyncImgLoadingFunc: PropTypes.func
};

Gallery.defaultProps = {
  decreaseWidth: 0,
  imagesPerRow: 10
};

export default Gallery;
