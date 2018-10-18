import React, { Component } from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import Slider from '@material-ui/lab/Slider';

class PrimaryAppBar extends Component {
  handleChange = (event, value) => {
    this.props.changeZoomLevel(value);
  };

  render() {
    const { classes, toggle, toggled, zoomLevel } = this.props;

    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: toggled,
          [classes.appBarShiftLeft]: toggled
        })}
        color="default"
      >
        <Toolbar disableGutters={!toggled}>
          <IconButton
            aria-label="open sidebar"
            className={classNames(classes.menuButton, toggled && classes.hide)}
            color="inherit"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="title" color="inherit">
            Cyto
          </Typography>
          <div
            style={{
              position: 'absolute',
              right: '5%',
              width: '10%'
            }}
          >
            <Slider
              step={5}
              classes={{ container: styles.slider }}
              value={zoomLevel}
              aria-labelledby="label"
              onChange={this.handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PrimaryAppBar);
