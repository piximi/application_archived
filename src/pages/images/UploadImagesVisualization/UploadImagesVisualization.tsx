import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '30px',
      width: '450px'
    },
    paper: {
      padding: theme.spacing(3, 2)
    }
  })
);

export default function LinearDeterminate(props: any) {
  const completed = props.completed;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Reading Images
      </Typography>
      <Typography component="p">
        This can take a while, based on the number of images being read
      </Typography>
      <LinearProgress variant="determinate" value={completed} />
    </Paper>
  );
}
