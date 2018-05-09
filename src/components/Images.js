import React, { Component } from 'react';
import { GridList, GridListTile } from 'material-ui';
import ConnectedImage from '../containers/ConnectedImage';
import withDragDropContext from './dnd-global-context';

class Images extends Component {
  render() {
    return (
      <GridList
        cellHeight={'auto'}
        cols={Number(this.props.columns)}
        spacing={4}
      >
        {this.props.images.map((sample, index) => (
          <GridListTile key={index} cols={1}>
            <ConnectedImage
              category={sample.category}
              identifier={sample.identifier}
              findCategory={this.props.findCategory}
              pathname={sample.pathname}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withDragDropContext(Images);
