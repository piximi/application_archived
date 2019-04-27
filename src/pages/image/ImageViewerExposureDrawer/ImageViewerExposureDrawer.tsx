import * as React from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { Drawer } from '@material-ui/core';
import ImageHistogram from '../ImageHistogram/ImageHistogram';
import ChannelSelection from '../ChannelSelection/ChannelSelection';
import Brightness from '../BrightnessSlider/BrightnessSlider';
import Contrast from '../Contrast/Contrast';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const ImageViewerExposureDrawer = (props: any) => {
  const {
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

  const classes = useStyles();

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

export default ImageViewerExposureDrawer;
