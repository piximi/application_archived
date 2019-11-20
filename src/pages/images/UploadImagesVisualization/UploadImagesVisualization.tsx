import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '100%',
      // '& > * + *': {
      //   marginTop: theme.spacing(2)
      // }
      padding: '30px',
      width: '450px'
    },
    paper: {
      padding: theme.spacing(3, 2)
    }
  })
);

export default function LinearDeterminate() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Reading Images
      </Typography>
      <Typography component="p">
        This can take a while, based on the number of images being read
      </Typography>
      <LinearProgress variant="determinate" value={completed} />
      <LinearProgress
        variant="determinate"
        value={completed}
        color="secondary"
      />
    </Paper>
  );
}
