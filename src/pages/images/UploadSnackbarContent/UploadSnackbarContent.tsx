import * as React from 'react';
import styles from './UploadSnackbarContent.css';
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  CardMedia
} from '@material-ui/core';

// @ts-ignore
import example from './example.png';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const UploadSnackbarContent = (props: any) => {
  const classes = useStyles({});

  return (
    <Card classes={{ root: classes.card }}>
      <CardMedia classes={{ root: classes.cardMedia }} image={example} />

      <div className={classes.details}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography component="h5" variant="h5">
            &nbsp;
          </Typography>
        </CardContent>

        <div className={classes.controls} />

        <LinearProgress variant="determinate" value={0} />
      </div>
    </Card>
  );
};

export default UploadSnackbarContent;
