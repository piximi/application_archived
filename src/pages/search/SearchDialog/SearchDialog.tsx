import * as React from 'react';
import styles from './SearchDialog.css';
import { AppBar, Dialog, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Search from '../Search/Search';

const useStyles = makeStyles(styles);

const SearchDialog = (props: any) => {
  const { onClose, open } = props;

  const classes = useStyles({});

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appbar}>
          <Toolbar>
            <Search />
          </Toolbar>
        </AppBar>
      </div>
    </Dialog>
  );
};

export default SearchDialog;
