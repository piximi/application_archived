import * as React from 'react';
import styles from './SearchDialog.css';
import { Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from '../AppBar/AppBar';

const useStyles = makeStyles(styles);

const SearchDialog = (props: any) => {
  const { onClose, open } = props;

  const classes = useStyles();

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <div className={classes.root}>
        <AppBar />
      </div>
    </Dialog>
  );
};

export default SearchDialog;
