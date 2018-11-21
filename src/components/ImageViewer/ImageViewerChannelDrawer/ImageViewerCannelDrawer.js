import React, { Component } from 'react';
import styles from './ImageViewer.css';
import { withStyles } from '@material-ui/core/styles';

class ImageViewerChannelDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        anchor="right"
        open={this.state.right}
        onClose={this.toggleDrawer('right', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('right', false)}
          onKeyDown={this.toggleDrawer('right', false)}
        />
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  ImageViewerChannelDrawer
);
