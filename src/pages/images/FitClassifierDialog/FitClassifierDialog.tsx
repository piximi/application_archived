import { Dialog, Theme } from '@material-ui/core';
import * as React from 'react';
import { AppBar } from './AppBar/AppBar';
import { DialogTransition } from './DialogTransition/DialogTransition';
import { Form } from './Form/Form';
import { History } from './History/History';
import classNames from 'classnames';
import { createStyles, makeStyles } from '@material-ui/styles';

const data = [
  { x: 0, y: 2 },
  { x: 1, y: 3 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 7 },
  { x: 5, y: 2 },
  { x: 6, y: 3 },
  { x: 7, y: 5 },
  { x: 8, y: 4 },
  { x: 9, y: 7 }
];

const drawerWidth = 280;

const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentLeft: {
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    contentShiftLeft: {
      marginLeft: drawerWidth
    },
    paper: {
      zIndex: 1100
    }
  });

const useStyles = makeStyles(styles);

type FitClassifierDialogProps = {
  closeDialog: () => void;
  openedDialog: boolean;
  openedDrawer: boolean;
};

export const FitClassifierDialog = (props: FitClassifierDialogProps) => {
  const { closeDialog, openedDialog, openedDrawer } = props;

  const styles = useStyles({});

  const className = classNames(styles.content, styles.contentLeft, {
    [styles.contentShift]: openedDrawer,
    [styles.contentShiftLeft]: openedDrawer
  });

  const classes = {
    paper: styles.paper
  };

  return (
    <Dialog
      className={className}
      classes={classes}
      disableBackdropClick
      disableEscapeKeyDown
      fullScreen
      onClose={closeDialog}
      open={openedDialog}
      TransitionComponent={DialogTransition}
      style={{ zIndex: 1100 }}
    >
      <AppBar closeDialog={closeDialog} openedDrawer={openedDrawer} />

      <History data={data} />

      <Form />
    </Dialog>
  );
};
