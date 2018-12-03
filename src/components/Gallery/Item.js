import React, { PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import LabelIcon from '@material-ui/icons/Label';
import ImageViewerDialog from '../ImageViewer/ImageViewerDialog/ImageViewerDialog';
import Image from './Image';
import styles from './Item.css';
import { withStyles } from '@material-ui/core/styles';

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
      for (let selectedItemIdentifier of selectedItemsIdentifiers) {
        props.callOnDragEnd(
          selectedItemIdentifier,
          categoryIdentifier,
          categoryName
        );
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
        <div style={{ position: 'absolute', margin: '4px 4px 2px' }}>
          <LabelIcon
            style={{
              color: item.color
            }}
          />
        </div>
        <Image
          openImageViewerDialog={this.openImageViewerDialog}
          src={imgSrc}
          key={'img' + imgId}
          height={containerStyle.height}
          width={0.9 * containerStyle.width}
        />
        <ImageViewerDialog
          onClose={this.closeImageViewerDialog}
          open={this.state.imageViewerDialogOpen}
          src={imgSrc}
        />
      </div>
    );
  }
}

export default DragSource('SelectedItems', itemSource, collect)(
  withStyles(styles, { withTheme: true })(Item)
);
