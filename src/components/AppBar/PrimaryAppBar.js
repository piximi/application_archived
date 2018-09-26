import React, { Component } from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';

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
            <img
              alt="logo"
              height="50px"
              src="https://cyto.ai/images/logo.png"
            />
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PrimaryAppBar);
