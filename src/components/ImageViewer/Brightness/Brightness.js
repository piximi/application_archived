import React, { PureComponent } from 'react';
import styles from './Brightness.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

class Brightness extends PureComponent {
  state = {
    value: 0
  };

  onChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Brightness</Typography>

        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Brightness);
