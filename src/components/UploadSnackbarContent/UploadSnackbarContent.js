import React, { PureComponent } from 'react';
import styles from './UploadSnackbarContent.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  CardMedia
} from '@material-ui/core';
import example from './example.png';

class UploadSnackbarContent extends PureComponent {
  render() {
    const { classes } = this.props;

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
  }
}

export default withStyles(styles, { withTheme: true })(UploadSnackbarContent);
