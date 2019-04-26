import React from 'react';
import styles from './BrightnessSlider.css';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const BrightnessSlider = props => {
  const classes = useStyles();

  const onChange = (event, value) => {
    props.setBrightness(value);
  };

  const { brightness } = props;

  return (
    <div className={classes.root}>
      <Typography style={{ color: 'white' }} id="label">
        Brightness
      </Typography>
      <Slider
        style={{ color: 'white' }}
        classes={{ container: classes.slider }}
        value={brightness}
        min={0}
        max={1000}
        step={0.5}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};

export default BrightnessSlider;
