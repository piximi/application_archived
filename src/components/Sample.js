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
      const categoryIdentifier = monitor.getDropResult().categoryIdentifier;

      const imageIdentifier = Number(props.identifier);

      const previousCategoryIdentifier = props.categoryIdentifier;

      const props = {
        categoryIdentifier: categoryIdentifier,
        previousCategoryIdentifier: previousCategoryIdentifier,
        image_id: imageIdentifier
      };

      component.onDrop(props);
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
