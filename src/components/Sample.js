import { GridListTileBar, IconButton } from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import LazyLoad from 'react-lazyload';

const source = {
  beginDrag(props) {
    return {
      identifier: props.identifier,
      categoryIdentifier: props.categoryIdentifier
    };
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      const categoryIdentifier = monitor.getDropResult().categoryIdentifier;

      const color = monitor.getDropResult().color;

      component.setState({
        categoryIdentifier: categoryIdentifier,
        color: color,
        identifier: props.identifier,
        pathname: props.pathname
      });
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryIdentifier: '',
      color: '',
      identifier: props.identifier,
      pathname: props.pathname
    };
  }

  render() {
    const { connectDragSource, pathname } = this.props;

    return connectDragSource(
      <div>
        <LazyLoad height={'100%'} once>
          <img src={pathname} style={{ width: '100%' }} />
        </LazyLoad>

        <GridListTileBar
          style={{
            backgroundColor: this.state.color || 'rgba(0, 0, 0, 0.4)',
            opacity: 0.4
          }}
        />
      </div>
    );
  }
}

export default DragSource('Image', source, collect)(Sample);
