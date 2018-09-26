import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import ConnectedGallery from '../../containers/ConnectedGallery';

class Application extends Component {
  state = {
    open: true
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
  };

  findCategory = identifier => {
    return this.props.categories.find(function(category) {
      return category.identifier === identifier;
    });
  };

  render() {
    const { classes, images, settings } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.appFrame}>
          <PrimaryAppBar toggle={this.onClick} toggled={this.state.open} />

          <ConnectedSidebar toggle={this.onClick} toggled={this.state.open} />

          <main
            className={classNames(classes.content, classes.contentLeft, {
              [classes.contentShift]: this.state.open,
              [classes.contentShiftLeft]: this.state.open
            })}
          >
            <div className={classes.drawerHeader} />

            <ConnectedGallery
              findCategory={this.findCategory}
              images={images}
              settings={settings}
            />
          </main>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Application);
