import React, { PureComponent } from 'react';
import styles from './Brightness.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

class Brightness extends PureComponent {
  onChange = (event, value) => {
    this.props.setBrightness(value);
  };

  render() {
    const { classes, brightness } = this.props;
    return (
      <div className={classes.root}>
        <Typography id="label">Brightness</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={brightness}
          min={0}
          max={1000}
          step={0.5}
          aria-labelledby="label"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Brightness);
