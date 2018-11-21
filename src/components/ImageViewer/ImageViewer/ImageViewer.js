import React, { Component } from 'react';
import styles from './ImageViewer.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ColorLensIcon from '@material-ui/icons/ColorLens';

class ImageViewer extends Component {
  state = {};

  render() {
    const { classes, src } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.props.onClose}
            >
              <ArrowBackIcon />
            </IconButton>

            <div className={classes.grow} />

            <IconButton className={classes.menuButton} color="inherit">
              <ColorLensIcon />
            </IconButton>

            <IconButton className={classes.menuButton} color="inherit">
              <EqualizerIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24}>
          <canvas height={512} width={512} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageViewer);
