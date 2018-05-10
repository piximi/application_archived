import {
  Card,
  CardContent,
  CardMedia,
  GridListTileBar,
  Typography,
  withStyles
} from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import LazyLoad from 'react-lazyload';
import styles from './Image.css';

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
    const {
      category,
      connectDragSource,
      findCategory,
      pathname,
      classes
    } = this.props;

    let color;

    if (!!category) {
      color = findCategory(category).color;
    } else {
      color = 'rgba(0, 0, 0, 0.4)';
    }

    return connectDragSource(
      <div>
        <Card>
          <CardMedia image={pathname} classes={{ root: classes.media }} />

          <CardContent
            classes={{ root: classes.content }}
            style={{ backgroundColor: color }}
          />
          {/*<img alt="foo" className="image" src={pathname} style={{ width: '100%' }}/>*/}

          {/*<GridListTileBar style={{ backgroundColor: color, opacity: 0.4 }} />*/}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(DragSource('Image', source, collect)(Image));
