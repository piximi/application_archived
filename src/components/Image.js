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

      const color = monitor.getDropResult().color;

      component.setState({
        category: category,
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

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
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
          <img alt="foo" src={pathname} style={{ width: '100%' }} />
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

export default DragSource('Image', source, collect)(Image);
