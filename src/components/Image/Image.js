import {
  GridListTile,
  GridListTileBar,
  IconButton,
  withStyles
} from 'material-ui';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import styles from './Image.css';
import * as databaseAPI from '../../database';
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
      externalData: null
    };
    this.asyncDatabaseRequest = this.asyncDatabaseRequest.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.checksum !== state.prevId) {
      return {
        externalData: null,
        prevId: props.checksum
      };
    }
    // No state update necessary
    return null;
  }

  componentDidMount() {
    this.asyncDatabaseRequest(this.props.checksum);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.externalData === null) {
      this.asyncDatabaseRequest(this.props.checksum);
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  asyncDatabaseRequest(checksum) {
    let alsoThis = this;
    databaseAPI.database.images.get(String(checksum)).then(function(result) {
      if (result) {
        alsoThis._asyncRequest = null;
        alsoThis.setState({ externalData: result.data });
      }
    });
  }

  render() {
    const {
      category,
      connectDragSource,
      findCategory,
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
        <GridListTile component="div">
          <img
            alt="foo"
            className={classes.image}
            src={this.state.externalData}
          />
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
