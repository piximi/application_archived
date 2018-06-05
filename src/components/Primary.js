import { AppBar, IconButton, Toolbar, Typography, Button } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedUploadButton from '../containers/ConnectedUploadButton';
import MenuIcon from '@material-ui/icons/Menu';

const Primary = ({
  classes,
  train,
  sortImages,
  upload,
  updateSettingSidebarOpen,
  updateSettingColumns,
  toggleSidebar,
  columns
}) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="title" color="inherit" className={classes.flex}>
          Cyto
        </Typography>

        {/*<ConnectedUploadButton />*/}

        {/*<Button onClick={() => sortImages()} variant="raised">{' '}SORT{' '}</Button>*/}

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

export default withStyles(styles, { withTheme: true })(Primary);
