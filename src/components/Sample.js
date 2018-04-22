import { GridListTileBar, IconButton } from 'material-ui';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import React, { Component } from 'react';

class Sample extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.pathname} />

        <GridListTileBar
          actionIcon={
            <IconButton>
              <LabelOutlineIcon />
            </IconButton>
          }
          actionPosition="left"
        />
      </React.Fragment>
    );
  }
}

export default Sample;
