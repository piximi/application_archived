import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { OptimizationGrid } from './OptimizationGrid/OptimizationGrid';
import { Grid, MenuItem, TextField } from '@material-ui/core';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expansionPanel: {
      boxShadow: 'none'
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      marginRight: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    form: {},
    appBar: {
      position: 'relative',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    container: {
      // width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
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
      flexBasis: 300,
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

export const Form = (props: any) => {
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
    <form className={classes.container} noValidate autoComplete="off">
      <OptimizationGrid />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            id="input-shape"
            label="Input shape"
            className={classes.textField}
            value={''}
            onChange={() => {}}
            margin="normal"
          />
        </Grid>

        <Grid item xs={3}>
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
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            id="batch-size"
            label="Batch size"
            className={classes.textField}
            value={'32'}
            onChange={() => {}}
            margin="normal"
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="epochs"
            label="Epochs"
            className={classes.textField}
            value={'10'}
            onChange={() => {}}
            margin="normal"
          />
        </Grid>
      </Grid>
    </form>
  );
};
