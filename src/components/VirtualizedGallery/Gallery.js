import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Items from './Items.js';
import Selectionbox from './Selectionbox.js';
import CustomDragLayer from './costumDragLayer';
import { collisionDetection } from './helper.js';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
      collisions: [],
      selectionboxCoordinates: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      selectionboxVisibility: 'hidden',
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
      this.setState({ selectionboxVisibility: 'visible' });
      let currentSelectionboxCoordinates = {
        ...this.state.selectionboxCoordinates
      };
      currentSelectionboxCoordinates.x1 = e.clientX; //Set the initial X
      currentSelectionboxCoordinates.y1 = e.clientY; //Set the initial Y
      this.setState({
        selectionboxCoordinates: currentSelectionboxCoordinates
      });
    }
  };

  onmousemove = e => {
    // Always update coordinates based on mouse position
    let currentSelectionboxCoordinates = {
      ...this.state.selectionboxCoordinates
    };
    currentSelectionboxCoordinates.x2 = e.clientX;
    currentSelectionboxCoordinates.y2 = e.clientY;
    this.setState({ selectionboxCoordinates: currentSelectionboxCoordinates });
    // Only check for collisions if selection box is active
    if (this.state.selectionboxVisibility === 'visible') {
      const collisions = collisionDetection(currentSelectionboxCoordinates);
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
    this.setState({ selectionboxVisibility: 'hidden', collisions: [] });
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

  setCrrentlyDraggedItem = value => {
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
      decreaseWidth
    } = this.props;
    return (
      <div
        className="container"
        onMouseDown={this.onmousedown}
        onMouseMove={this.onmousemove}
        onMouseUp={this.onmouseup}
      >
        <CustomDragLayer draggedItem={this.state.currentlyDraggedItem} />
        <Selectionbox
          selectionboxCoordinates={this.state.selectionboxCoordinates}
          visibility={this.state.selectionboxVisibility}
        />
        <Items
          images={images}
          imagesPerRow={imagesPerRow}
          decreaseWidth={decreaseWidth}
          asyncImgLoadingFunc={asyncImgLoadingFunc}
          selectItem={this.selectItem}
          selectedItems={this.state.selected}
          ondrag={this.setCrrentlyDraggedItem}
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
