import React, { PureComponent } from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';
import ChannelSelection from '../ChannelSelection/ChannelSelection';
import Brightness from '../Brightness/Brightness';
import Contrast from '../Contrast/Contrast';

class ImageViewerExposureDrawer extends PureComponent {
  render() {
    const {
      classes,
      onClose,
      open,
      src,
      setBrightness,
      brightness,
      setContrast,
      contrast,
      setUnselectedChannels,
      unselectedChannels
    } = this.props;
    return (
      <Drawer
        anchor="right"
        style={{ backgroundColor: '#202124' }}
        classes={{ paper: classes.paper }}
        variant={'persistent'}
        onClose={onClose}
        open={open}
      >
        =
        <div
          className={classes.content}
          onKeyDown={onClose}
          role="button"
          tabIndex={0}
        >
          <ImageHistogram src={src} />
          <ChannelSelection
            setUnselectedChannels={setUnselectedChannels}
            unselectedChannels={unselectedChannels}
          />
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
