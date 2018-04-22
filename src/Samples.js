import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from 'material-ui';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
});

class Samples extends Component {
  render() {
    return (
      <GridList cellHeight={256} cols={3}>
        {this.props.samples.map(sample => (
          <GridListTile key={sample.image.pathname} cols={1}>
            <LazyLoad height={'100%'} offset={100} once>
              <img src={sample.image.pathname} />

              <GridListTileBar
                actionPosition="left"
                actionIcon={
                  <IconButton>
                    <LabelOutlineIcon />
                  </IconButton>
                }
              />
            </LazyLoad>
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withStyles(styles)(Samples);
