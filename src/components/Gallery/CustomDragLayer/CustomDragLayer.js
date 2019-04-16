import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import './CustomDragLayer.css';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9999,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function getItemStyles(props) {
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform: transform,
    WebkitTransform: transform
  };
}

let swapArrayElements = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

const CustomDragLayer = props => {
  const { item, itemType, isDragging } = props;

  const renderItem = (type, item) => {
    const list = document.getElementsByClassName('selected');
    let imgSources = [];
    let draggedIndex = 0;
    for (let i = 0; i < list.length; i = i + 1) {
      const element = list[i];
      const imgElement = list[i].childNodes[2];
      let img = (
        <img key={'draglayerImg' + i} src={imgElement.data} alt="foo" />
      );
      imgSources.push(img);
      if (element.getAttribute('imageId') === item.item.id) {
        draggedIndex = i;
      }
    }
    swapArrayElements(imgSources, draggedIndex, 0);

    return (
      <div id="drag-layer">
        {imgSources} <span>{list.length}</span>{' '}
      </div>
    );
  };

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem(itemType, item)}</div>
    </div>
  );
};

CustomDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired
};

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  };
}

export default DragLayer(collect)(CustomDragLayer);
