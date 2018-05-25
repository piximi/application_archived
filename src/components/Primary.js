import { AppBar, IconButton, Toolbar, Typography, Button } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedUploadButton from '../containers/ConnectedUploadButton';

const Primary = ({
  classes,
  train,
  sortImages,
  upload,
  updateSettingSidebarOpen,
  updateSettingColumns,
  columns
}) => {
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

        <Button onClick={() => sortImages()} variant="raised">
          {' '}
          SORT{' '}
        </Button>

        <div
          style={{ position: 'fixed', right: '10%', zIndex: 1 }}
          className="slidecontainer"
        >
          <input
            onChange={e => updateSettingColumns(e)}
            type="range"
            min="1"
            max="100"
            value={columns}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
