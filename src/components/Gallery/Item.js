import React, { PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ImageViewerDialog from '../ImageViewer/ImageViewerDialog/ImageViewerDialog';
import Image from './Image';
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
      const categoryName = monitor.getDropResult().categoryName;
      const selectedItemsIdentifiers = monitor.getDropResult().selectedItems;
      props.callOnDragEnd(
        selectedItemsIdentifiers,
        categoryIdentifier,
        categoryName
      );
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

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageViewerDialogOpen: false
    };
  }

  closeImageViewerDialog = () => {
    this.setState({
      imageViewerDialogOpen: false
    });
  };

  openImageViewerDialog = () => {
    this.setState({
      imageViewerDialogOpen: true
    });
  };

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {
      selectedItems,
      onmousedown,
      connectDragSource,
      containerStyle,
      item
    } = this.props;
    const imgId = String(item.id);
    const imgSrc = item.src;
    const brightness = item.brightness;
    const contrast = item.contrast;
    const imgSelected = selectedItems.includes(imgId);
    return connectDragSource(
      <div
        key={'div' + imgId}
        name={'selectableElement'}
        type={'selectableElement'}
        imgid={imgId}
        onMouseDown={() => onmousedown(imgId)}
        className={imgSelected ? 'selected' : 'unselected'}
      >
        <ItemLabel color={item.color} />
        <Image
          key={'img' + imgId}
          openImageViewerDialog={this.openImageViewerDialog}
          src={imgSrc}
          brightness={brightness}
          contrast={contrast}
          height={containerStyle.height}
          width={0.9 * containerStyle.width}
        />
        <ImageViewerDialog
          onClose={this.closeImageViewerDialog}
          open={this.state.imageViewerDialogOpen}
          src={imgSrc}
          imgIdentifier={imgId}
          brightness={brightness}
        />
      </div>
    );
  }
}

export default DragSource('SelectedItems', itemSource, collect)(
  withStyles(styles, { withTheme: true })(Item)
);
