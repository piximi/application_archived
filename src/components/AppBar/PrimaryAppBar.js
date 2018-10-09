import React, { Component } from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from 'material-ui';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ReplayIcon from '@material-ui/icons/Replay';
import Slider from '@material-ui/lab/Slider';

class PrimaryAppBar extends Component {
  render() {
    const { classes, toggle, toggled } = this.props;

    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: toggled,
          [classes.appBarShiftLeft]: toggled
        })}
        color="default"
      >
        <Toolbar className={classes.toolBar} disableGutters={true}>
          <Toolbar
            // className={classNames(toggled? classes.hide:classes.appBarLeft)}
            className={classes.appBarLeft}
            disableGutters={true}
          >
            <Tooltip title={(toggled ? 'Hide ' : 'Show ') + 'sidebar'}>
              <IconButton
                aria-label="open sidebar"
                className={classNames(classes.menuButton)}
                color="inherit"
                onClick={toggle}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>

            <Typography variant="title" color="inherit">
              <img
                alt="logo"
                height="50px"
                src="https://cyto.ai/images/logo.png"
              />
            </Typography>
          </Toolbar>

          <Toolbar className={classes.appBarCenter} />

          <Toolbar className={classes.appBarRight}>
            <Tooltip title="Change zoom">
              <Slider value={50} />
            </Tooltip>

            <Tooltip title="Reset zoom level">
              <IconButton
                aria-label="reset zoom level"
                className={classes.menuButton}
              >
                <ReplayIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PrimaryAppBar);
