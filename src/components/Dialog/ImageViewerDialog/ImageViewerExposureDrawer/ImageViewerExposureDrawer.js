import React from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';
import ChannelSelection from '../ChannelSelection/ChannelSelection';
import Brightness from '../BrightnessSlider/BrightnessSlider';
import Contrast from '../Contrast/Contrast';

const ImageViewerExposureDrawer = props => {
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
  } = props;
  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      style={{ backgroundColor: '#202124' }}
      variant={'persistent'}
      onClose={onClose}
      open={open}
    >
      <ImageHistogram channels={unselectedChannels} src={src} />

      <ChannelSelection
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={unselectedChannels}
      />

      <Brightness brightness={brightness} setBrightness={setBrightness} />
      <Contrast contrast={contrast} setContrast={setContrast} />
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true })(
  ImageViewerExposureDrawer
);
