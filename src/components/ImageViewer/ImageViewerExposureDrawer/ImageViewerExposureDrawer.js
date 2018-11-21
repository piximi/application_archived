import React, { Component } from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';

class ImageViewerExposureDrawer extends Component {
  render() {
    const { classes, onClose, open } = this.props;

    return (
      <Drawer
        anchor="right"
        classes={{ paper: classes.paper }}
        onClose={onClose}
        open={open}
      >
        <div
          className={classes.content}
          onClick={onClose}
          onKeyDown={onClose}
          role="button"
          tabIndex={0}
        >
          <ImageHistogram />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  ImageViewerExposureDrawer
);
