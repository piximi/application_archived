import * as React from 'react';
import styles from './ImageViewerExposureDrawer.css';
import Drawer from '@material-ui/core/Drawer';
import { BrightnessSlider } from '../BrightnessSlider/BrightnessSlider';
import { ContrastSlider } from '../ContrastSlider/ContrastSlider';
import { ChannelSelection } from '../ChannelSelection/ChannelSelection';
import { ImageHistogram } from '../ImageHistogram/ImageHistogram';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export const ImageViewerExposureDrawer = (props: any) => {
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

  const classes = useStyles({});

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      style={{ backgroundColor: '#202124' }}
      variant={'persistent'}
      onClose={onClose}
      open={open}
    >
      <ImageHistogram />

      <ChannelSelection />

      <BrightnessSlider brightness={brightness} setBrightness={setBrightness} />
      <ContrastSlider contrast={contrast} setContrast={setContrast} />
    </Drawer>
  );
};
