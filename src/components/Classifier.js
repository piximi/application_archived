import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  Toolbar,
  Typography
} from 'material-ui';
import Categories from './Categories';
import Images from './Images';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import _ from 'lodash';

class Classifier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories,
      images: this.props.images,
      settings: this.props.settings
    };
  }

  onChange = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        columns: event.target.value
      }
    });
  };

  categoryOnChange = (event, identifier) => {
    const categories = this.state.categories;

    const index = _.findIndex(categories, function(category) {
      return category.identifier === identifier;
    });

    categories[index].visible = !categories[index].visible;

    this.setState({
      categories: categories
    });
  };

  createCategory = () => {
    this.setState(previous => ({
      categories: [
        ...previous.categories,
        {
          color: '',
          name: '',
          index: _.last(previous.categories).index + 1,
          visible: true
        }
      ]
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
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

                <Divider />

                <Categories
                  categories={this.state.categories}
                  categoryOnChange={this.categoryOnChange}
                  onClick={this.createCategory}
                />
              </Drawer>
            </Grid>

            <Grid item xs={9}>
              <div className={classes.toolbar} />

              <Toolbar className={classes.primaryToolbar}>
                <Grid container spacing={0}>
                  <Grid item xs={10} />

                  <Grid item xs={2}>
                    <input
                      type="range"
                      min="2"
                      max="24"
                      step="1"
                      value={this.state.settings.columns}
                      onChange={this.onChange}
                      style={{ width: '100%' }}
                    />
                  </Grid>
                </Grid>
              </Toolbar>

              <Divider />

              <main className={classes.content}>
                <Images
                  columns={this.state.settings.columns}
                  images={this.state.images}
                />
              </main>
            </Grid>
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles)(Classifier);
