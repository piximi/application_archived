import * as React from 'react';
import {
  ArrowBack,
  PauseCircleOutline,
  PlayCircleOutline,
  ReplayRounded
} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    button: {},
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

export const DialogAppBar = (props: any) => {
  const { closeDialog, openedDrawer } = props;

  const classes = useStyles();

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: openedDrawer,
        [classes.appBarShiftLeft]: openedDrawer
      })}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          onClick={closeDialog}
          aria-label="Close"
          href={''}
        >
          <ArrowBack />
        </IconButton>

        <div className={classes.grow} />

        <IconButton className={classes.button} onClick={closeDialog} href={''}>
          <PlayCircleOutline />
        </IconButton>

        <IconButton className={classes.button} onClick={closeDialog} href={''}>
          <PauseCircleOutline />
        </IconButton>

        <IconButton className={classes.button} onClick={closeDialog} href={''}>
          <ReplayRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
