import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import { Divider, Drawer, Grid, Toolbar } from 'material-ui';
import Categories from './Categories';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import uuidv4 from 'uuid';
import _ from 'lodash';
import * as API from '../classifier';
import Gallery from './Gallery';
import Primary from './Primary';
import Sidebar from './Sidebar';

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

  onColumnsChange = event => {
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
          <Primary />

          <Grid container spacing={0}>
            <Sidebar
              categories={this.state.categories}
              categoryOnChange={this.categoryOnChange}
              categoryOnNameChange={this.categoryOnNameChange}
              createCategory={this.createCategory}
            />

            <Gallery
              onColumnsChange={this.onColumnsChange}
              findCategory={this.findCategory}
              images={this.state.images}
              settings={this.state.settings}
              updateImageCategory={this.updateImageCategory}
            />
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles)(Classifier);
