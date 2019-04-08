import React, { useState } from 'react';
import styles from './Settings.css';
import {
  AppBar,
  Collapse,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Toolbar,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function Settings(props) {
  const [classificationCollapsed, setClassificationCollapsed] = useState(0);

  const [notificationsClicked, setNotificationsClicked] = useState(0);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={props.onClose}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" className={classes.flex}>
            Settings
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={24}>
        <Grid item xs={1} sm={1} md={3} lg={4} />

        <Grid item xs={10} sm={10} md={6} lg={4}>
          <List component="div">
            <ListItem>
              <Grid item xs={12}>
                <ListItemText primary="Notifications" />
                <ListItemText
                  className={classes.secondary}
                  secondary="Notifications are disabled. Learn more."
                />
              </Grid>

              <ListItemSecondaryAction>
                <Switch
                  onChange={() =>
                    setNotificationsClicked(!notificationsClicked)
                  }
                  checked={notificationsClicked}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Divider />

          <List component="nav">
            <ListItem
              button
              onClick={() =>
                setClassificationCollapsed(!classificationCollapsed)
              }
            >
              <ListItemText primary="Object recognition" />

              {classificationCollapsed ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItem>

            <Collapse
              in={!classificationCollapsed}
              timeout="auto"
              unmountOnExit
            >
              <List
                component="div"
                disablePadding
                className={classes.collapsed}
              >
                <ListItem>
                  <ListItemText primary="Loss function" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Learning rate" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
