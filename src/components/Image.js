import { GridListTileBar } from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import LazyLoad from 'react-lazyload';

const source = {
  beginDrag(props) {
    return {
      identifier: props.identifier,
      category: props.category
    };
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      const category = monitor.getDropResult().category;

      props.updateImageCategory(props.identifier, category);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Image extends Component {
  render() {
    const { category, connectDragSource, findCategory, pathname } = this.props;

    let color;

    if (!!category) {
      color = findCategory(category).color;
    } else {
      color = 'rgba(0, 0, 0, 0.4)';
    }

    return connectDragSource(
      <div>
        <LazyLoad height={'100%'} once>
          <img alt="foo" src={pathname} style={{ width: '100%' }} />
        </LazyLoad>

        <GridListTileBar style={{ backgroundColor: color, opacity: 0.4 }} />
      </div>
    );
  }
}

export default DragSource('Image', source, collect)(Image);
