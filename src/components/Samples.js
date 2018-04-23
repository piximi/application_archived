import React, { Component } from 'react';
import { GridList, GridListTile } from 'material-ui';
import Sample from './Sample';
import uuidv4 from 'uuid';

class Samples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samples: this.props.pathnames.map(pathname => ({
        identifier: uuidv4(),
        categoryIdentifier: null,
        pathname: pathname
      }))
    };
  }

  render() {
    return (
      <GridList cellHeight={'auto'} cols={this.props.columns} spacing={4}>
        {this.state.samples.map((sample, index) => (
          <GridListTile key={index} cols={1}>
            <Sample
              categoryIdentifier={sample.categoryIdentifier}
              identifier={sample.identifier}
              pathname={sample.pathname}
              drop={this.props.drop}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default Samples;
