import React, { Component } from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';
import Brightness from '../Brightness/Brightness';
import Contrast from '../Contrast/Contrast';

class ImageViewerExposureDrawer extends Component {
  render() {
    const {
      classes,
      onClose,
      open,
      src,
      setBrightness,
      brightness,
      setContrast,
      contrast
    } = this.props;

    return (
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
        variant={'persistent'}
        onClose={onClose}
        open={open}
      >
        <div
          className={classes.content}
          onKeyDown={onClose}
          role="button"
          tabIndex={0}
        >
          <ImageHistogram src={src} />

          <Brightness brightness={brightness} setBrightness={setBrightness} />

          <Contrast contrast={contrast} setContrast={setContrast} />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  ImageViewerExposureDrawer
);
