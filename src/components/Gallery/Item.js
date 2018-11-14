import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LabelIcon from '@material-ui/icons/Label';

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
    // Set dragged item to null
    props.ondrag(null);
    if (monitor.getDropResult() !== null) {
      const categoryIdentifier = monitor.getDropResult().categoryIdentifier;
      const selectedItemsIdentifiers = monitor.getDropResult().selectedItems;
      for (let selectedItemIdentifier of selectedItemsIdentifiers) {
        props.callOnDragEnd(selectedItemIdentifier, categoryIdentifier);
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
      src: null
    };
    this.asyncDatabaseRequest = this.asyncDatabaseRequest.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Store previousChecksum in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.item.id !== state.previousId) {
      return {
        src: null,
        previousId: props.item.id
      };
    }
    // No state update necessary
    return null;
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
    this.asyncDatabaseRequest(this.props.item.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.src === null) {
      this.asyncDatabaseRequest(this.props.item.id);
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  asyncDatabaseRequest(id) {
    if (typeof this.props.asyncImgLoadingFunc === 'function') {
      this.props.asyncImgLoadingFunc(id, this);
    }
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
        key={'li' + imgId}
        name={'selectableElement'}
        type={'selectableElement'}
        imgid={imgId}
        onMouseDown={() => onmousedown(imgId)}
        className={imgSelected ? 'selected' : 'unselected'}
      >
        <div style={{ position: 'absolute', padding: '4px 4px 2px' }}>
          {item.category == null ? (
            <LabelOutlinedIcon style={{ color: item.color }} />
          ) : (
            <LabelIcon style={{ color: item.color }} />
          )}
        </div>
        <img
          key={'img' + imgId}
          type={'selectableElement'}
          alt="foo"
          src={this.state.src === null ? imgSrc : this.state.src}
          style={{
            padding: '2px 2px 2px',
            verticalAlign: 'bottom',
            backgroundColor: 'transparent',
            width: 0.9 * containerStyle.width,
            maxHeight: 0.9 * containerStyle.height
          }}
        />
      </div>
    );
  }
}

export default DragSource('SelectedItems', itemSource, collect)(Item);
