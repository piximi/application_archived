import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, MenuItem, TextField } from '@material-ui/core';

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
    menu: {
      // width: 200,
    },
    textField: {
      // marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flexBasis: 300,
      width: '100%'
    }
  })
);

export const OptimizationGrid = (props: any) => {
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
    <Grid container spacing={2}>
      <Grid item xs={3}>
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
      </Grid>

      <Grid item xs={3}>
        <TextField
          id="learning-rate"
          label="Learning rate"
          className={classes.textField}
          value={'0.01'}
          onChange={() => {}}
          margin="normal"
        />
      </Grid>
    </Grid>
  );
};
