import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Download from '@axetroy/react-download';
import ConnectedUploadButton from '../containers/ConnectedUploadButton';

const Primary = ({ classes, train, upload, updateSettingSidebarOpen }) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          CYTO AI
        </Typography>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={updateSettingSidebarOpen}
        />
        <ConnectedUploadButton />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
