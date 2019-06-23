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
import { Category, Image } from '@piximi/types';
import { createDataset, createModel } from '../../../network';
import * as tensorflow from '@tensorflow/tfjs';
import { useState } from 'react';

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

  const [batchSize, setBatchSize] = useState<string>('32');
  const [epochs, setEpochs] = useState<string>('10');
  const [optimizationAlgorithm, setOptimizationAlgorithm] = useState<string>(
    'adam'
  );
  const [learningRate, setLearningRate] = useState<string>('0.01');
  const [lossFunction, setLossFunction] = useState<string>(
    'softmaxCrossEntropy'
  );
  const [inputShape, setInputShape] = useState<string>('224, 224, 3');
  const [trainingLossHistory, setTrainingLossHistory] = useState<number[]>([]);
  const [trainingAccuracyHistory, setTrainingAccuracyHistory] = useState<
    number[]
  >([]);
  const [validationLossHistory, setValidationLossHistory] = useState<number[]>(
    []
  );
  const [validationAccuracyHistory, setValidationAccuracyHistory] = useState<
    number[]
  >([]);

  const onBatchSizeChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setBatchSize(target.value);
  };

  const onEpochsChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setEpochs(target.value);
  };

  const onInputShapeChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setInputShape(target.value);
  };

  const onLearningRateChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setLearningRate(target.value);
  };

  const onLossFunctionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setLossFunction(target.value);
  };

  const onOptimizationAlgorithmChange = (
    event: React.FormEvent<EventTarget>
  ) => {
    const target = event.target as HTMLInputElement;

    setOptimizationAlgorithm(target.value);
  };

  const className = classNames(styles.content, styles.contentLeft, {
    [styles.contentShift]: openedDrawer,
    [styles.contentShiftLeft]: openedDrawer
  });

  const classes = {
    paper: styles.paper
  };

  const fit = async () => {
    const depth = categories.length - 1;

    const model = await createModel(depth, 100);

    createDataset(categories, images).then(async batches => {
      for (const batch of batches) {
        const [xs, ys] = batch;

        const x = tensorflow.tidy(() => {
          return tensorflow.concat(xs as tensorflow.Tensor<tensorflow.Rank>[]);
        });

        const y = tensorflow.tidy(() => {
          return tensorflow.oneHot(ys as number[], depth);
        });

        const metrics: number[] = (await model.trainOnBatch(x, y)) as number[];

        const [loss, accuracy] = metrics;

        setTrainingLossHistory([...trainingLossHistory, loss]);
        setTrainingAccuracyHistory([...trainingAccuracyHistory, accuracy]);

        console.log(metrics);
      }
    });
  };

  const onFit = () => {
    fit().then(() => {});
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
        fit={onFit}
        openedDrawer={openedDrawer}
      />

      <DialogContent>
        <History data={[]} />

        <Form
          batchSize={batchSize}
          closeDialog={closeDialog}
          epochs={epochs}
          inputShape={inputShape}
          learningRate={learningRate}
          lossFunction={lossFunction}
          onBatchSizeChange={onBatchSizeChange}
          onEpochsChange={onEpochsChange}
          onInputShapeChange={onInputShapeChange}
          onLearningRateChange={onLearningRateChange}
          onLossFunctionChange={onLossFunctionChange}
          onOptimizationAlgorithmChange={onOptimizationAlgorithmChange}
          openedDialog={openedDialog}
          optimizationAlgorithm={optimizationAlgorithm}
        />
      </DialogContent>
    </Dialog>
  );
};
