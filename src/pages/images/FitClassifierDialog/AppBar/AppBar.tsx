import * as MaterialUI from '@material-ui/core';
import * as React from 'react';
import { ArrowBack, Pause, PlayArrow, Replay, Stop } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    button: {
      marginRight: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    appBar: {
      position: 'relative',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    appBarShift: {},
    appBarShiftLeft: {}
  })
);

export const AppBar = (props: any) => {
  const { closeDialog, openedDrawer } = props;

  const classes = useStyles();

  return (
    <MaterialUI.AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: openedDrawer,
        [classes.appBarShiftLeft]: openedDrawer
      })}
    >
      <MaterialUI.Toolbar>
        <MaterialUI.IconButton
          edge="start"
          color="primary"
          onClick={closeDialog}
          aria-label="Close"
          href={''}
        >
          <ArrowBack />
        </MaterialUI.IconButton>

        <div className={classes.grow} />

        <MaterialUI.Button
          className={classes.button}
          color="primary"
          onClick={closeDialog}
          variant="contained"
          href={''}
        >
          <PlayArrow />
          Start
        </MaterialUI.Button>

        <MaterialUI.Button
          className={classes.button}
          color="primary"
          onClick={closeDialog}
          variant="contained"
          href={''}
        >
          <Pause />
          Pause
        </MaterialUI.Button>

        <MaterialUI.Button
          className={classes.button}
          color="primary"
          onClick={closeDialog}
          variant="contained"
          href={''}
        >
          <Stop className={classes.leftIcon} />
          Stop
        </MaterialUI.Button>

        <MaterialUI.Button
          color="primary"
          onClick={closeDialog}
          variant="contained"
          href={''}
        >
          <Replay className={classes.leftIcon} />
          Restart
        </MaterialUI.Button>
      </MaterialUI.Toolbar>
    </MaterialUI.AppBar>
  );
};
