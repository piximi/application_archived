import React, { Component } from 'react';
import { GridList, GridListTile } from 'material-ui';
import Image from './Image';
import withDragDropContext from './dnd-global-context';

const Images = props => {
  return (
    <GridList cellHeight={'auto'} cols={Number(props.columns)} spacing={4}>
      {props.images.map((sample, index) => (
        <GridListTile key={index} cols={1}>
          <Image
            category={sample.category}
            identifier={sample.identifier}
            findCategory={props.findCategory}
            pathname={sample.pathname}
            updateImageCategory={props.updateImageCategory}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withDragDropContext(Images);
