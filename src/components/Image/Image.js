import {
  Card,
  CardContent,
  CardMedia,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  Typography,
  withStyles
} from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import styles from './Image.css';
import { database } from '../../database';
import LabelIcon from '@material-ui/icons/Label';

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
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  render() {
    const {
      checksum,
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

    // TODO: make this work
    database.images.get(checksum).then(image => {
      // this.setState({
      //   data: image.data
      // });
    });

    return connectDragSource(
      <div className={classes.foo}>
        <GridListTile>
          <img className={classes.image} src={pathname} />
          <GridListTileBar
            title={probability == null ? null : String(probability).slice(0, 8)}
            actionIcon={
              <IconButton className={classes.icon}>
                <LabelIcon style={{ color: color }} />
              </IconButton>
            }
          />
        </GridListTile>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DragSource('Image', source, collect)(Image)
);
