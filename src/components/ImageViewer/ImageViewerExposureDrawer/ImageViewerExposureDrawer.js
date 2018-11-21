import React, { Component } from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

class ImageViewerExposureDrawer extends Component {
  render() {
    const { classes, onClose, open } = this.props;

    return (
      <Drawer
        anchor="right"
        className={classes.root}
        onClose={onClose}
        open={open}
      >
        <div onClick={onClose} onKeyDown={onClose} role="button" tabIndex={0}>
          <span>Exposure</span>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  ImageViewerExposureDrawer
);
