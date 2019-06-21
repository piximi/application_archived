import { Dialog, DialogContent, Theme } from '@material-ui/core';
import * as React from 'react';
import { DialogAppBar } from './AppBar/DialogAppBar';
import { DialogTransition } from './DialogTransition/DialogTransition';
import { Form } from './Form/Form';
import { History } from './History/History';
import classNames from 'classnames';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as _ from 'lodash';

const data = _.map(_.range(0, 100), index => {
  return {
    x: index,
    y: _.random(0.0, 1.0, true)
  };
});

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
      <DialogAppBar closeDialog={closeDialog} openedDrawer={openedDrawer} />

      <DialogContent>
        <History data={data} />

        <Form />
      </DialogContent>
    </Dialog>
  );
};
