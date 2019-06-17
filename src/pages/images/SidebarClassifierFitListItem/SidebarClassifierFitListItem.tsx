import {
  Dialog,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Slide,
  TextField,
  MenuItem,
  Grid,
  Button
} from '@material-ui/core';
import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { useState } from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useDialog, useSnackbar } from '@piximi/hooks';
import { Snackbar } from '@piximi/components';
import { createDataset, createModel } from '../../../network';
import { Logs } from '@tensorflow/tfjs-layers';
import * as tensorflow from '@tensorflow/tfjs';
import { Close, ExpandMore } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';

const lossFunctions = [
  {
    label: 'Absolute difference',
    value: 'absoluteDifference'
  },
  {
    label: 'Cosine distance',
    value: 'cosineDistance'
  },
  {
    label: 'Hinge',
    value: 'hingeLoss'
  },
  {
    label: 'Huber',
    value: 'huberLoss'
  },
  {
    label: 'Log',
    value: 'logLoss'
  },
  {
    label: 'Mean squared error (MSE)',
    value: 'meanSquaredError'
  },
  {
    label: 'Sigmoid cross entropy',
    value: 'sigmoidCrossEntropy'
  },
  {
    label: 'Softmax cross entropy',
    value: 'softmaxCrossEntropy'
  }
];

const optimizationAlgorithms = [
  {
    value: 'adadelta',
    label: 'Adadelta'
  },
  {
    value: 'adam',
    label: 'Adam'
  },
  {
    value: 'adamax',
    label: 'Adamax'
  },
  {
    value: 'rmsprop',
    label: 'RMSProp'
  },
  {
    value: 'sgd',
    label: 'Stochastic gradient descent (SGD)'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expansionPanel: {
      boxShadow: 'none'
    },
    form: {},
    appBar: {
      position: 'relative'
    },
    container: {
      width: '100%'
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    root: {
      zIndex: 1100
    },
    paper: {
      zIndex: 1100
    },
    paperFullScreen: {
      left: '280px'
    },
    menu: {
      // width: 200,
    },
    textField: {
      // marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

const FitclassifierDialogTransition = React.forwardRef<
  unknown,
  TransitionProps
>(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const FitclassifierDialog = (props: any) => {
  const { openedDialog, closeDialog } = props;

  interface State {
    lossFunction: string;
    optimizationAlgorithm: string;
  }

  const [values, setValues] = React.useState<State>({
    lossFunction: 'softmaxCrossEntropy',
    optimizationAlgorithm: 'adam'
  });

  const onChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.paper
      }}
      fullScreen
      onClose={closeDialog}
      open={openedDialog}
      TransitionComponent={FitclassifierDialogTransition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeDialog}
            aria-label="Close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fit classifier
          </Typography>
          <Button color="inherit" onClick={closeDialog}>
            Fit
          </Button>
        </Toolbar>
      </AppBar>

      <form className={classes.container} noValidate autoComplete="off">
        <ExpansionPanel classes={{ root: classes.expansionPanel }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="optimization-content"
            id="optimization-header"
          >
            <Typography className={classes.heading}>Optimization</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="optimization-algorithm"
              select
              label="Optimization algorithm"
              className={classes.textField}
              value={values.optimizationAlgorithm}
              onChange={onChange('optimizationAlgorithm')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {optimizationAlgorithms.map(optimizationAlgorithm => (
                <MenuItem
                  key={optimizationAlgorithm.value}
                  value={optimizationAlgorithm.value}
                >
                  {optimizationAlgorithm.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="learning-rate"
              label="Learning rate"
              className={classes.textField}
              value={'0.01'}
              onChange={() => {}}
              margin="normal"
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel classes={{ root: classes.expansionPanel }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="optimization-content"
            id="optimization-header"
          >
            <Typography className={classes.heading}>Optimization</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="learning-rate"
              label="Learning rate"
              className={classes.textField}
              value={''}
              onChange={() => {}}
              margin="normal"
            />

            <TextField
              id="loss-function"
              select
              label="Loss function"
              className={classes.textField}
              value={values.lossFunction}
              onChange={onChange('lossFunction')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {lossFunctions.map(lossFunction => (
                <MenuItem key={lossFunction.value} value={lossFunction.value}>
                  {lossFunction.label}
                </MenuItem>
              ))}
            </TextField>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </form>
    </Dialog>
  );
};

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = async () => {
    const model = await createModel(categories.length - 1, 100);

    console.log(tensorflow.memory());

    const { success, x, y } = await createDataset(categories, images);

    if (!success) {
      return;
    }

    openSnackbar();

    const args = {
      batchSize: 1,
      callbacks: {
        onTrainBegin: async (logs?: Logs | undefined) => {
          console.log(`onTrainBegin`);
        },
        onTrainEnd: async (logs?: Logs | undefined) => {
          closeSnackbar();
        },
        onEpochBegin: async (epoch: number, logs?: Logs | undefined) => {
          console.log(`onEpochBegin ${epoch}`);
        },
        onEpochEnd: async (epoch: number, logs?: Logs | undefined) => {
          if (logs) {
            console.log(`onEpochEnd ${epoch}, loss: ${logs.loss}`);
          }
        },
        onBatchBegin: async (batch: number, logs?: Logs | undefined) => {
          console.log(`onBatchBegin ${batch}`);
        },
        onBatchEnd: async (batch: number, logs?: Logs | undefined) => {
          console.log(`onBatchEnd ${batch}`);
        }
      },
      epochs: 10,
      shuffle: true,
      validationSplit: 0.2,
      verbose: 2
    };

    const history = await model.fit(x, y, args);

    setMessage(history);
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <Snackbar
        closeSnackbar={closeSnackbar}
        message={message}
        openedSnackbar={openedSnackbar}
      />

      <FitclassifierDialog
        openedDialog={openedDialog}
        closeDialog={closeDialog}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierFitListItem;
