import * as React from 'react';
import styles from './DialogContent.css';
import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type Props = {
  children: React.ReactNode;
};

const DialogContent = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <MaterialUI.DialogContent className={classes.content}>
      <MaterialUI.Paper className={classes.root} elevation={0}>
        {children}
      </MaterialUI.Paper>
    </MaterialUI.DialogContent>
  );
};

export default DialogContent;
