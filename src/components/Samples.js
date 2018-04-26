import React from 'react';
import { GridList, GridListTile } from 'material-ui';
import Sample from './Sample';
import withDragDropContext from './dnd-global-context';

const Samples = props => {
  return (
    <GridList cellHeight={'auto'} cols={props.columns} spacing={4}>
      {props.images.map((sample, index) => (
        <GridListTile key={index} cols={1}>
          <Sample
            categoryIdentifier={sample.categoryIdentifier}
            identifier={sample.identifier}
            pathname={sample.pathname}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withDragDropContext(Samples);
