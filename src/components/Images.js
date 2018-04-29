import React, { Component } from 'react';
import { GridList, GridListTile } from 'material-ui';
import Image from './Image';
import withDragDropContext from './dnd-global-context';

class Images extends Component {
  render() {
    return (
      <GridList cellHeight={'auto'} cols={this.props.columns} spacing={4}>
        {this.props.images.map((sample, index) => (
          <GridListTile key={index} cols={1}>
            <Image
              category={sample.category}
              identifier={sample.identifier}
              pathname={sample.pathname}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withDragDropContext(Images);
