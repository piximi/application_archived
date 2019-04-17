import * as React from 'react';
import styles from './SettingsDialog.css';
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(styles);

const SettingsDialogTransition = (props: any) => (
  <Slide direction="right" {...props} />
);

const SettingsDialog = (props: any) => {
  const { onClose, open } = props;

  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={SettingsDialogTransition}
    >
      <div className={classes.root}>
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

            <Typography variant="h6" color="inherit" className={classes.flex}>
              Settings
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </Dialog>
  );
};

export default SettingsDialog;
