import React from 'react';
import styles from './BrightnessSlider.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

const BrightnessSlider = props => {
  const onChange = (event, value) => {
    props.setBrightness(value);
  };

  const { classes, brightness } = props;

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

export default withStyles(styles, { withTheme: true })(BrightnessSlider);
