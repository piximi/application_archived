import * as React from 'react';
import styles from './Dialog.css';
import { makeStyles } from '@material-ui/styles';
import * as MaterialUI from '@material-ui/core';

const useStyles = makeStyles(styles);

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Dialog = (props: Props) => {
  const { children, open, onClose } = props;

  const classes = useStyles();

  return (
    <MaterialUI.Dialog
      classes={{ paper: classes.paper }}
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      open={open}
    >
      {children}
    </MaterialUI.Dialog>
  );
};

export default Dialog;
