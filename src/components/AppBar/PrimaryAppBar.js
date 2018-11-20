import React, { Component } from 'react';
import styles from './PrimaryAppBar.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import Search from './Search';
import Logo from './Logo';
import ImportImagesButton from './ImportImagesButton';

class PrimaryAppBar extends Component {
  render() {
    const { classes, toggle, toggled, toggleUploadDialog } = this.props;

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

          <Logo />

          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={2} />

            <Grid item xs={4}>
              <Search />
            </Grid>

            <Grid item>
              <ImportImagesButton toggleUploadDialog={toggleUploadDialog} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PrimaryAppBar);
