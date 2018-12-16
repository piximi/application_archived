import React, { PureComponent } from 'react';
import styles from './ImageViewer.css';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Button,
  Tooltip
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import PublicIcon from '@material-ui/icons/Public';
import ImageViewerChannelDrawer from '../ImageViewerChannelDrawer/ImageViewerChannelDrawer';
import ImageViewerExposureDrawer from '../ImageViewerExposureDrawer/ImageViewerExposureDrawer';
import Image from '../../Gallery/Image';

class ImageViewer extends PureComponent {
  state = {
    applySettingsGlobally: false,
    channelDrawerToggled: false,
    exposureDrawerToggled: true,
    brightness: 100,
    contrast: 100
  };

  componentDidMount() {
    const initialBrightness = this.props.images[this.props.imgIdentifier]
      .brightness;
    const initialContrast = this.props.images[this.props.imgIdentifier]
      .contrast;
    this.setState({ brightness: initialBrightness, contrast: initialContrast });
  }

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

  saveEdits = () => {
    const imgIdentifier = this.props.imgIdentifier;
    const brightness = this.state.brightness;
    const contrast = this.state.contrast;
    this.state.applySettingsGlobally
      ? this.props.saveEditsGlobally(brightness, contrast)
      : this.props.saveEdits(imgIdentifier, brightness, contrast);
  };

  undoEdits = () => {
    const initialBrightness = this.props.images[this.props.imgIdentifier]
      .brightness;
    const initialContrast = this.props.images[this.props.imgIdentifier]
      .contrast;
    this.setState({ brightness: initialBrightness, contrast: initialContrast });
  };

  render() {
    const { classes, src, imgIdentifier } = this.props;
    const { brightness, contrast, applySettingsGlobally } = this.state;

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

            <Tooltip title="Apply settings globally">
              <IconButton
                onClick={() =>
                  this.setState({
                    applySettingsGlobally: !applySettingsGlobally
                  })
                }
                className={
                  applySettingsGlobally
                    ? classes.globalButton
                    : classes.menuButton
                }
                color="inherit"
                aria-label="Menu"
              >
                <PublicIcon />
              </IconButton>
            </Tooltip>

            {this.state.exposureDrawerToggled ? (
              <Button
                variant="contained"
                className={classes.undoButton}
                onClick={this.undoEdits}
              >
                Undo
              </Button>
            ) : null}

            {this.state.exposureDrawerToggled ? (
              <Button
                variant="contained"
                className={classes.saveButton}
                onClick={this.saveEdits}
              >
                Save
              </Button>
            ) : null}

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
