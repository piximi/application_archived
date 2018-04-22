import React, { Component } from 'react';
import './App.css';
import { withStyles } from 'material-ui/styles';
import { AppBar, Drawer, Grid, Toolbar, Typography } from 'material-ui';
import Categories from './components/Categories';
import Samples from './components/Samples';
import data from './images/stock.json';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative'
  },
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: 4
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      columns: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar} color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              &nbsp;
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
            >
              <div className={classes.toolbar} />

              <Toolbar />

              <Categories />
            </Drawer>
          </Grid>

          <Grid item xs={9}>
            <main className={classes.content}>
              <div className={classes.toolbar} />

              <Toolbar>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="1"
                  value={this.state.columns}
                  onChange={this.onChange}
                />
              </Toolbar>

              <Samples columns={this.state.columns} pathnames={data} />
            </main>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
