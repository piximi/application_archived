import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import {
  AppBar,
  Button,
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
import uuidv4 from 'uuid';
import _ from 'lodash';
import * as API from '../classifier';
import Download from '@axetroy/react-download';

class Classifier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories,
      images: this.props.images,
      settings: this.props.settings
    };
  }

  save = () => {
    console.log('save');
  };

  open = event => {
    const reader = new FileReader();

    reader.readAsText(event.target.files[0]);

    reader.onload = stream => {
      this.setState(JSON.parse(stream.target.result));
    };
  };

  onChange = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        columns: event.target.value
      }
    });
  };

  categoryOnNameChange = (event, identifier) => {
    const categories = this.state.categories;

    const index = this.findCategoryIndex(identifier);

    categories[index].name = event.target.value;

    this.setState({
      categories: categories
    });
  };

  categoryOnChange = (event, identifier) => {
    const categories = this.state.categories;

    const index = this.findCategoryIndex(identifier);

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
          identifier: uuidv4(),
          name: '',
          index: _.last(previous.categories).index + 1,
          visible: true
        }
      ]
    }));
  };

  findCategory = identifier => {
    const index = this.findCategoryIndex(identifier);

    return this.state.categories[index];
  };

  findCategoryIndex = identifier => {
    return _.findIndex(this.state.categories, function(category) {
      return category.identifier === identifier;
    });
  };

  findImage = identifier => {
    const index = this.findImageIndex(identifier);

    return this.state.images[index];
  };

  findImageIndex = identifier => {
    return _.findIndex(this.state.images, function(image) {
      return image.identifier === identifier;
    });
  };

  updateImageCategory = (identifier, category) => {
    const images = this.state.images;

    const index = this.findImageIndex(identifier);

    images[index].category = category;

    this.setState({
      images: images
    });
  };

  train = () => {
    return API.trainOnRun(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar} color="default">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Cyto
              </Typography>

              <Button onClick={this.train}>Run</Button>

              <input onChange={this.open} type="file" />

              <Download
                file="example.cyto"
                content={JSON.stringify(this.state)}
              >
                <Button onClick={this.save}>Save</Button>
              </Download>
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
                  categoryOnNameChange={this.categoryOnNameChange}
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
                  findCategory={this.findCategory}
                  images={this.state.images}
                  updateImageCategory={this.updateImageCategory}
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
