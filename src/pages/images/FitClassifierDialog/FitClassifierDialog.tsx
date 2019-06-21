import {
  Dialog,
  DialogContent,
  Grid,
  LinearProgress,
  Theme
} from '@material-ui/core';
import * as React from 'react';
import { DialogAppBar } from './DialogAppBar/DialogAppBar';
import { DialogTransition } from './DialogTransition/DialogTransition';
import { Form } from './Form/Form';
import { History } from './History/History';
import classNames from 'classnames';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as _ from 'lodash';
import { Category, Image } from '@piximi/types';
import { createDataset, createModel } from '../../../network';
import * as tensorflow from '@tensorflow/tfjs';

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
  categories: Category[];
  closeDialog: () => void;
  images: Image[];
  openedDialog: boolean;
  openedDrawer: boolean;
};

export const FitClassifierDialog = (props: FitClassifierDialogProps) => {
  const { categories, closeDialog, images, openedDialog, openedDrawer } = props;

  const styles = useStyles({});

  const className = classNames(styles.content, styles.contentLeft, {
    [styles.contentShift]: openedDrawer,
    [styles.contentShiftLeft]: openedDrawer
  });

  const classes = {
    paper: styles.paper
  };

  const fit = async () => {
    const model = await createModel(categories.length - 1, 100);

    console.log(tensorflow.memory());

    const { success, x, y } = await createDataset(categories, images);

    if (!success) {
      return;
    }

    const args = {
      batchSize: 1,
      callbacks: {
        onTrainBegin: async (logs?: tensorflow.Logs | undefined) => {},
        onTrainEnd: async (logs?: tensorflow.Logs | undefined) => {},
        onEpochBegin: async (
          epoch: number,
          logs?: tensorflow.Logs | undefined
        ) => {},
        onEpochEnd: async (
          epoch: number,
          logs?: tensorflow.Logs | undefined
        ) => {},
        onBatchBegin: async (
          batch: number,
          logs?: tensorflow.Logs | undefined
        ) => {},
        onBatchEnd: async (
          batch: number,
          logs?: tensorflow.Logs | undefined
        ) => {}
      },
      epochs: 10,
      shuffle: true,
      validationSplit: 0.2,
      verbose: 2
    };

    const history = await model.fit(x, y, args);
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
      <DialogAppBar
        closeDialog={closeDialog}
        fit={fit}
        openedDrawer={openedDrawer}
      />

      <DialogContent>
        <History data={data} />

        <Grid container spacing={2}>
          <LinearProgress variant="determinate" value={0} />
        </Grid>

        <Form />
      </DialogContent>
    </Dialog>
  );
};
