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

      component.setState({
        categoryIdentifier: categoryIdentifier,
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
      identifier: props.identifier,
      pathname: props.pathname
    };
  }

  onDrop = dropped => {
    this.props.onDrop(dropped);
  };

  render() {
    const { connectDragSource, pathname } = this.props;

    return connectDragSource(
      <div>
        <LazyLoad height={'100%'} once>
          <img src={pathname} style={{ width: '100%' }} />
        </LazyLoad>

        {/*<GridListTileBar />*/}
      </div>
    );
  }
}

export default DragSource('Image', source, collect)(Sample);
