import React from 'react';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import styles from './Contrast.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const Contrast = props => {
  const { contrast } = props;

  const classes = useStyles();

  const onChange = (event, value) => {
    props.setContrast(value);
  };

  return (
    <div className={classes.root}>
      <Typography style={{ color: 'white' }} id="label">
        Contrast
      </Typography>

      <Slider
        classes={{ container: classes.slider }}
        min={50}
        max={300}
        step={0.1}
        value={contrast}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};

export default Contrast;
