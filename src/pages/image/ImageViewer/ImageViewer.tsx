import * as React from 'react';
import styles from './ImageViewer.css';
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
import PublicIcon from '@material-ui/icons/Public';
import { ImageViewerExposureDrawer } from '..';
import Image from '../../../components/Image/Image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type Props = {
  src: any;
  imgIdentifier: any;
  saveEditsGlobally: any;
  onClose: any;
  images: any;
};

const ImageViewer = (props: Props) => {
  const classes = useStyles();

  const [applySettingsGlobally, setApplySettingsGlobally] = React.useState(
    false
  );
  const [exposureDrawerToggled, setExposureDrawerToggled] = React.useState(
    true
  );
  const [brightness, setBrightness] = React.useState(100);
  const [contrast, setContrast] = React.useState(100);
  const [unselectedChannels, setUnselectedChannels] = React.useState([]);

  const { src, imgIdentifier, onClose, images } = props;

  const toggleExposureDrawer = () => {
    setExposureDrawerToggled(!exposureDrawerToggled);
  };

  const saveEdits = () => {};

  const undoEdits = () => {
    const initialBrightness = images[imgIdentifier].brightness;

    const initialContrast = images[imgIdentifier].contrast;

    setBrightness(initialBrightness);
    setContrast(initialContrast);
  };

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
            unselectedChannels={unselectedChannels}
          />
        </Grid>
      </Grid>

      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onClose}
          >
            <ArrowBackIcon />
          </IconButton>

          <Tooltip title="Apply settings globally">
            <IconButton
              onClick={() => setApplySettingsGlobally(!applySettingsGlobally)}
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

          {exposureDrawerToggled ? (
            <Button
              variant="contained"
              className={classes.undoButton}
              onClick={undoEdits}
            >
              Undo
            </Button>
          ) : null}

          {exposureDrawerToggled ? (
            <Button
              variant="contained"
              className={classes.saveButton}
              onClick={saveEdits}
            >
              Save
            </Button>
          ) : null}

          <div className={classes.grow} />

          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={toggleExposureDrawer}
          >
            <EqualizerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ImageViewerExposureDrawer
        onClose={toggleExposureDrawer}
        open={exposureDrawerToggled}
        src={src}
        imgIdentifier={imgIdentifier}
        setBrightness={setBrightness}
        brightness={brightness}
        setContrast={setContrast}
        contrast={contrast}
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={unselectedChannels}
      />
    </div>
  );
};

export default ImageViewer;
