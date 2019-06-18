import {
  Dialog,
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
  Button,
  Grid
} from '@material-ui/core';
import * as React from 'react';
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

const FitclassifierDialogTransition = React.forwardRef<
  unknown,
  TransitionProps
>(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const FitClassifierDialog = (props: any) => {
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

      <Grid container>
        <Grid item xs={3} />

        <Grid item xs={6}>
          <form className={classes.container} noValidate autoComplete="off">
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
                  dense
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

            <TextField
              id="input-shape"
              label="Input shape"
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
                <MenuItem
                  dense
                  key={lossFunction.value}
                  value={lossFunction.value}
                >
                  {lossFunction.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="batch-size"
              label="Batch size"
              className={classes.textField}
              value={'32'}
              onChange={() => {}}
              margin="normal"
            />

            <TextField
              id="epochs"
              label="Epochs"
              className={classes.textField}
              value={'10'}
              onChange={() => {}}
              margin="normal"
            />
          </form>
        </Grid>

        <Grid item xs={3} />
      </Grid>
    </Dialog>
  );
};
