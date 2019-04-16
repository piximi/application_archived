import React, { Component } from 'react';
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

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageViewerDialogOpen: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.imageViewerDialogOpen !== nextState.imageViewerDialogOpen)
      return true;
    else if (
      nextProps.selectedItems.includes(this.props.item.id) !==
      this.props.selectedItems.includes(this.props.item.id)
    )
      return true;
    else if (JSON.stringify(nextProps.item) !== JSON.stringify(this.props.item))
      return true;
    else if (
      JSON.stringify(nextProps.containerStyle) !==
      JSON.stringify(this.props.containerStyle)
    )
      return true;
    else if (
      JSON.stringify(nextProps.containerStyle) !==
      JSON.stringify(this.props.containerStyle)
    )
      return true;
    return false;
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

  myContextMenu = e => {
    e.preventDefault();
    console.log(true);
  };

  render() {
    const {
      selectedItems,
      onmousedown,
      connectDragSource,
      containerStyle,
      item
    } = this.props;
    const imgId = String(item.checksum);
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
        onContextMenu={this.myContextMenu}
        className={imgSelected ? 'selected' : 'unselected'}
      >
        <ItemLabel color={item.color} />
        <Image
          key={'img' + imgId}
          openImageViewerDialog={this.openImageViewerDialog}
          src={imgSrc}
          brightness={brightness}
          contrast={contrast}
          unselectedChannels={unselectedChannels}
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
