import React from 'react';
import styles from './SidebarAppBar.css';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

function SidebarAppBar(props) {
  const { toggle, toggled } = props;

  const classes = useStyles();

  return (
    <AppBar className={classNames(classes.appBar)} color="default">
      <Toolbar disableGutters={true}>
        <Tooltip title={(toggled ? 'Hide ' : 'Show ') + 'sidebar'}>
          <IconButton
            aria-label="open sidebar"
            className={classNames(classes.menuButton)}
            color="inherit"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="h6" color="inherit">
          Logo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SidebarAppBar;
