import { GridListTileBar, IconButton } from 'material-ui';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const source = {
  beginDrag(props) {
    return {
      identifier: props.identifier,
      categoryIdentifier: props.categoryIdentifier
    };
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      component.onDrop({
        categoryIdentifier: monitor.getDropResult().categoryIdentifier,
        previousCategoryIdentifier: props.categoryIdentifier,
        imageIdentifier: props.identifier
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
      identifier: props.identifier,
      pathname: props.pathname
    };
  }

  onDrop(props) {
    this.props.drop(props);
  }

  render() {
    const { connectDragSource, pathname } = this.props;

    return connectDragSource(
      <div>
        <img src={pathname} />

        <GridListTileBar
          actionIcon={
            <IconButton>
              <LabelOutlineIcon />
            </IconButton>
          }
          actionPosition="left"
        />
      </div>
    );
  }
}

export default DragSource('Image', source, collect)(Sample);
