import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { VictoryLine } from 'victory';
import { Grid } from '@material-ui/core';

type Data = { x: Number; y: Number }[];

type HistoryProps = { data: Data };

const useStyles = makeStyles(() => createStyles({}));

export const History = (props: HistoryProps) => {
  const { data } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <VictoryLine data={data} height={100} padding={0} width={200} />
      </Grid>

      <Grid item xs={3}>
        <VictoryLine data={data} height={100} padding={0} width={200} />
      </Grid>
    </Grid>
  );
};
