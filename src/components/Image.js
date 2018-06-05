import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
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
      classes,
      probability
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
          >
            <Typography component="p">
              {probability == null ? null : String(probability).slice(0, 8)}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DragSource('Image', source, collect)(Image)
);
