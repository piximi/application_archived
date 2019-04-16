import React, { Component, useEffect, useState } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ImageViewerDialog from '../../Dialog/ImageViewerDialog/ImageViewerDialog/ImageViewerDialog';
import Image from '../Image/Image';
import styles from './Item.css';
import { withStyles } from '@material-ui/core/styles';
import ItemLabel from '../ItemLabel/ItemLabel';

const itemSource = {
  beginDrag(props) {
    const imgId = props.item.id;
    // Set global dragged item to this item
    props.ondrag(imgId);
    return {
      item: props.item,
      selectedItems: props.selectedItems
    };
  },
  endDrag(props, monitor, component) {
    props.ondrag(null);
    if (monitor.getDropResult() !== null) {
      const categoryIdentifier = monitor.getDropResult().categoryIdentifier;
      const identifiers = monitor.getDropResult().selectedItems;

      for (const identifier of identifiers) {
        props.updateImageCategory(identifier, categoryIdentifier);
      }
    }
    if (!monitor.didDrop()) {
      return;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

const Item = props => {
  const {
    connectDragPreview,
    selectedItems,
    onmousedown,
    connectDragSource,
    containerStyle,
    item
  } = props;

  const [imageViewerDialogOpen, setImageViewerDialogOpen] = useState(false);

  const closeImageViewerDialog = () => {
    setImageViewerDialogOpen(false);
  };

  const openImageViewerDialog = () => {
    setImageViewerDialogOpen(true);
  };

  useEffect(() => {
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  });

  const myContextMenu = e => {
    e.preventDefault();
  };

  const imgId = String(item.identifier);
  const imgSrc = item.data;
  const brightness = item.brightness;
  const contrast = item.contrast;
  const unselectedChannels = item.unselectedChannels;
  const imgSelected = selectedItems.includes(imgId);

  return connectDragSource(
    <div
      key={'div' + imgId}
      name={'selectableElement'}
      type={'selectableElement'}
      imgid={imgId}
      onMouseDown={() => onmousedown(imgId)}
      onContextMenu={myContextMenu}
      className={imgSelected ? 'selected' : 'unselected'}
    >
      <ItemLabel color={item.color} />
      <Image
        key={'img' + imgId}
        openImageViewerDialog={openImageViewerDialog}
        src={imgSrc}
        brightness={brightness}
        contrast={contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
      />
      <ImageViewerDialog
        onClose={closeImageViewerDialog}
        open={imageViewerDialogOpen}
        src={imgSrc}
        imgIdentifier={imgId}
        brightness={brightness}
      />
    </div>
  );
};

export default DragSource('SelectedItems', itemSource, collect)(
  withStyles(styles, { withTheme: true })(Item)
);
