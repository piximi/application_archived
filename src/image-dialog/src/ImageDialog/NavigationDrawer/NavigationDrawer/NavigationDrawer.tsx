import * as React from 'react';
import styles from './NavigationDrawer.css';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { BrightnessSlider, ChannelsList, ContrastSlider, Histogram } from '..';

const useStyles = makeStyles(styles);

export const NavigationDrawer = (props: any) => {
  const {
    onClose,
    open,
    setBrightness,
    brightness,
    setContrast,
    contrast
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
      <Histogram />

      <ChannelsList />

      <BrightnessSlider brightness={brightness} setBrightness={setBrightness} />
      <ContrastSlider contrast={contrast} setContrast={setContrast} />
    </Drawer>
  );
};
