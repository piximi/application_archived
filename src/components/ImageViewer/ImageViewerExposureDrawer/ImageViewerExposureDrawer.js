import React, { Component } from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';

class ImageViewerExposureDrawer extends Component {
  render() {
    const { classes, onClose, open, src } = this.props;

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
          <ImageHistogram src={src} />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  ImageViewerExposureDrawer
);
