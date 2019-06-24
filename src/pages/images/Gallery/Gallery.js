import * as React from 'react';
import './Gallery.css';
import { GalleryCustomDragLayer, GalleryItems, GallerySelectionBox } from '..';
import { collisionDetection } from '../helper';

export const Gallery = props => {
  const { images, categories, imagesPerRow, decreaseWidth } = props;

  const visibleCategories = categories
    .filter(category => category.visualization.visible)
    .map(category => category.identifier);

  const imageIsVisible = categoryIdentifier => {
    return visibleCategories.includes(categoryIdentifier);
  };

  const visibleImages =
    images.length > 0
      ? images.filter(image => imageIsVisible(image.categoryIdentifier))
      : images;

  const [selected, setSelected] = React.useState([]);
  const [collisions, setCollisions] = React.useState([]);
  const [selectionBoxCoordinates, setSelectionBoxCoordinates] = React.useState({
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  });
  const [selectionBoxVisibility, setSelectionBoxVisibility] = React.useState(
    'hidden'
  );
  const [currentlyDraggedItem, setCurrentlyDraggedItem] = React.useState(null);
  const [shiftKeyPressed, setShiftKeyPressed] = React.useState(false);
  const [altKeyPressed, setAltKeyPressed] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    document.addEventListener('keydown', keyEvent);
    document.addEventListener('keyup', keyEvent);
    window.addEventListener('resize', windowResizeEvent);
  }, []);

  const onmousedown = e => {
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x1 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y1 = e.clientY; //Set the initial Y
    currentSelectionBoxCoordinates.x2 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y2 = e.clientY; //Set the initial Y

    setMouseDown(true);
    setSelectionBoxCoordinates(currentSelectionBoxCoordinates);

    // Only activate selection box when not dragging on a selectable item
    if (e.target.getAttribute('type') !== 'selectableElement') {
      setSelectionBoxVisibility('visible');
    }
  };

  const onmousemove = e => {
    // Always update coordinates based on mouse position
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x2 = e.clientX;
    currentSelectionBoxCoordinates.y2 = e.clientY;
    if (mouseDown) {
      setSelectionBoxCoordinates(currentSelectionBoxCoordinates);
    }
    // Only check for collisions if selection box is active
    if (selectionBoxVisibility === 'visible') {
      const collisions = collisionDetection(currentSelectionBoxCoordinates);
      setSelected(collisions);
      setCollisions(collisions);
      props.setSelectedImages(collisions);
    }
  };

  const onmouseup = e => {
    // Check if no collisions occured and mouseup event is outside of a selectable item
    if (
      e.target.getAttribute('type') !== 'selectableElement' &&
      collisions.length === 0
    ) {
      // if so unselect all items
      setSelected([]);
      props.setSelectedImages([]);
    }
    // Hide selection box und reset collisions
    setMouseDown(false);
    setSelectionBoxVisibility('hidden');
    setCollisions([]);
  };

  const selectItem = imgId => {
    let selectedItems = [...selected];
    const noSelectedItems = selectedItems.length;
    // Check if clicked on an already selected item
    if (selectedItems.includes(imgId)) {
      return;
    }
    // Check if shiftkey is pressed
    if (shiftKeyPressed) {
      selectedItems.push(imgId);
    }
    // Check if alt keys is pressed
    else if (altKeyPressed) {
      // Select a range of images
      let selectOthers = false;
      const lastSelected = selectedItems[selectedItems.length - 1];
      for (let image of props.images) {
        if (image.id === imgId || image.id === lastSelected) {
          selectedItems.push(image.id);
          selectOthers = !selectOthers;
        }
        if (selectOthers && noSelectedItems !== 0) selectedItems.push(image.id);
      }
    }
    // No special key pressed
    else {
      selectedItems = [imgId];
    }
    // Set selected state
    props.setSelectedImages(selectedItems);
    setSelected(selectedItems);
  };

  const keyEvent = e => {
    setShiftKeyPressed(e.shiftKey);
    setAltKeyPressed(e.altKey);
  };

  const windowResizeEvent = e => {
    setWindowWidth(e.target.innerWidth);
  };

  // Check if no images are visible or available
  if (!images || !images.length) {
    return null;
  }

  return (
    <div
      className="container noselect"
      onMouseDown={onmousedown}
      onMouseMove={onmousemove}
      onMouseUp={onmouseup}
    >
      <GalleryCustomDragLayer draggedItem={currentlyDraggedItem} />
      <GallerySelectionBox
        selectionBoxCoordinates={selectionBoxCoordinates}
        visibility={selectionBoxVisibility}
      />
      <GalleryItems
        images={visibleImages}
        imagesPerRow={imagesPerRow}
        windowWidth={windowWidth}
        decreaseWidth={decreaseWidth}
        selectItem={selectItem}
        selectedItems={selected}
        ondrag={setCurrentlyDraggedItem}
      />
    </div>
  );
};

Gallery.defaultProps = {
  decreaseWidth: 0,
  imagesPerRow: 10
};
