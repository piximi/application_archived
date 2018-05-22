import { AppBar, IconButton, Toolbar } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Download from '@axetroy/react-download';
import UploadButton from './UploadButton';

const Primary = ({ classes, train, upload, updateSettingSidebarOpen}) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Cyto
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={updateSettingSidebarOpen}
        />
        <Button onClick={train}>Run</Button>
        <UploadButton upload={upload} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
