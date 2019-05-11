import * as React from 'react';
import styles from './BrightnessSlider.css';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type Props = {
  brightness: number;
  setBrightness: (brightness: number) => void;
};

const BrightnessSlider = (props: Props) => {
  const classes = useStyles();

  const { brightness, setBrightness } = props;

  const onChange = (event: any, value: any) => {
    setBrightness(value);
  };

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
