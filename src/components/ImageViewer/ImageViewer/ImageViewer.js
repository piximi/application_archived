import React, { PureComponent } from 'react';
import styles from './ImageViewer.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageViewerChannelDrawer from '../ImageViewerChannelDrawer/ImageViewerChannelDrawer';
import ImageViewerExposureDrawer from '../ImageViewerExposureDrawer/ImageViewerExposureDrawer';
import Image from '../../Gallery/Image';

class ImageViewer extends PureComponent {
  state = {
    channelDrawerToggled: false,
    exposureDrawerToggled: false,
    brightness: 100,
    contrast: 100
  };

  toggleChannelDrawer = () => {
    this.setState({
      channelDrawerToggled: !this.state.channelDrawerToggled
    });
  };

  toggleExposureDrawer = () => {
    this.setState({
      exposureDrawerToggled: !this.state.exposureDrawerToggled
    });
  };

  setBrightness = value => {
    this.setState({
      brightness: value
    });
  };

  setContrast = value => {
    this.setState({
      contrast: value
    });
  };

  render() {
    const { classes, src, imgIdentifier } = this.props;
    const { brightness, contrast } = this.state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.container}
          container
          alignItems="center"
          justify="center"
          spacing={24}
        >
          <Grid item xs={4}>
            <Image
              src={src}
              height={500}
              width={500}
              brightness={brightness}
              contrast={contrast}
            />
          </Grid>
        </Grid>

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

            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleChannelDrawer}
            >
              <ColorLensIcon />
            </IconButton>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleExposureDrawer}
            >
              <EqualizerIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <ImageViewerChannelDrawer
          onClose={this.toggleChannelDrawer}
          open={this.state.channelDrawerToggled}
        />

        <ImageViewerExposureDrawer
          onClose={this.toggleExposureDrawer}
          open={this.state.exposureDrawerToggled}
          src={src}
          imgIdentifier={imgIdentifier}
          setBrightness={this.setBrightness}
          setContrast={this.setContrast}
          brightness={brightness}
          contrast={contrast}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageViewer);
