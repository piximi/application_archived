import React, { Component } from 'react';
import styles from './Settings.css';
import { withStyles } from 'material-ui/styles/index';
import {
  AppBar,
  Collapse,
  Divider,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Toolbar,
  Typography
} from 'material-ui';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

class Settings extends Component {
  state = {
    classification: {
      collapsed: false
    },
    language: 'English',
    notifications: {
      clicked: false
    }
  };

  notificationsToggle = () => {};

  classificationOnClick = () => {
    this.setState({
      classification: {
        collapsed: !this.state.classification.collapsed
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={true}>
        <div className={classes.root}>
          <AppBar position="static" color="inherit" className={classes.appbar}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                component={Link}
                to="/"
              >
                <ArrowBackIcon />
              </IconButton>

              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Settings
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={24}>
            <Grid item xs={2} />

            <Grid item xs={6}>
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
                      onChange={this.notificationsToggle}
                      checked={this.state.notifications.checked}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>

              <Divider />

              <List component="nav">
                <ListItem button onClick={this.classificationOnClick}>
                  <ListItemText primary="Object recognition" />

                  {this.state.classification.collapsed ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItem>

                <Collapse
                  in={this.state.classification.collapsed}
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
      </Fade>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Settings);
