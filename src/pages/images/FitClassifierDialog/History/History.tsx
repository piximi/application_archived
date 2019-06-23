import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { Grid, Typography } from '@material-ui/core';

type Data = { x: Number; y: Number }[];

type HistoryProps = { data: Data };

const useStyles = makeStyles(() =>
  createStyles({
    typography: {
      color: 'rgba(0, 0, 0, 0.54)',
      padding: 0,
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0.00938em',
      margin: '16px 0',
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    }
  })
);

export const History = (props: HistoryProps) => {
  const { data } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography classes={{ root: classes.typography }}>Loss</Typography>

        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={[]} />
        </VictoryChart>
      </Grid>

      <Grid item xs={4}>
        <Typography classes={{ root: classes.typography }}>Accuracy</Typography>

        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={[]} />
        </VictoryChart>
      </Grid>
    </Grid>
  );
};
