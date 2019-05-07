import React, { useEffect } from 'react';
import { DragSource } from 'react-dnd/lib/index';
import { getEmptyImage } from 'react-dnd-html5-backend/lib/index';
import { ImageViewerDialog } from '../../image';
import { GalleryImage, GalleryItemContextMenu } from '..';
import { useDialog, useMenu } from '../../../hooks';
import { ConnectedItemLabel } from '../../../containers';

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

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview()
});

const GalleryItem = props => {
  const {
    connectDragPreview,
    selectedItems,
    onmousedown,
    connectDragSource,
    containerStyle,
    item
  } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  useEffect(() => {
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  });

  const myContextMenu = e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    e.preventDefault();
    if (anchorEl) {
      closeMenu();

      // e.initMouseEvent('contextmenu', true, true, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
    } else {
      openMenu(e);
    }
  };

  const unselectedChannels = item.unselectedChannels;
  const imgSelected = selectedItems.includes(item.identifier);

  return connectDragSource(
    <div
      key={'div' + item.identifier}
      name={'selectableElement'}
      type={'selectableElement'}
      imgid={item.identifier}
      onMouseDown={() => onmousedown(item.identifier)}
      onContextMenu={myContextMenu}
      className={imgSelected ? 'selected' : 'unselected'}
    >
      <ConnectedItemLabel image={item} />
      <GalleryImage
        key={'img' + item.identifier}
        openImageViewerDialog={openDialog}
        src={item.data}
        brightness={item.brightness}
        contrast={item.contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
      />

      <GalleryItemContextMenu
        anchorEl={anchorEl}
        onClose={closeMenu}
        open={openedMenu}
        openImageViewerDialog={openDialog}
      />

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={item.data}
        imgIdentifier={item.identifier}
        brightness={item.brightness}
      />
    </div>
  );
};

export default DragSource('SelectedItems', itemSource, collect)(GalleryItem);
