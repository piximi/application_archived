import * as React from 'react';
import styles from './SettingsDialog.css';
import {
  AppBar,
  Collapse,
  Dialog,
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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(styles);

const SettingsDialog = props => {
  const [classificationCollapsed, setClassificationCollapsed] = React.useState(
    false
  );

  const [notificationsClicked, setNotificationsClicked] = React.useState(false);

  const { onClose, open } = props;

  const classes = useStyles();

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onClose}
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
    </Dialog>
  );
};

export default SettingsDialog;
