import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Grid } from 'material-ui';

class Samples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xs: 1
    };
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} />

        {this.props.samples.map(sample => (
          <Grid item xs={1}>
            <LazyLoad height={'100%'} offset={100} once>
              <img src={sample.image.pathname} />
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Samples;
