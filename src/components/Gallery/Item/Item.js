import React, { useEffect } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ImageViewerDialog from '../../Dialog/ImageViewerDialog/ImageViewerDialog/ImageViewerDialog';
import Image from '../Image/Image';
import styles from './Item.css';
import { withStyles } from '@material-ui/core/styles';
import ItemLabel from '../ItemLabel/ItemLabel';
import useDialog from '../../../hooks/Dialog';

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

  const { openedDialog, openDialog, closeDialog } = useDialog();

  useEffect(() => {
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  });

  const myContextMenu = e => {
    e.preventDefault();
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
      <ItemLabel color={item.color} />
      <Image
        key={'img' + item.identifier}
        openImageViewerDialog={openDialog}
        src={item.data}
        brightness={item.brightness}
        contrast={item.contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
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

export default DragSource('SelectedItems', itemSource, collect)(
  withStyles(styles, { withTheme: true })(Item)
);
