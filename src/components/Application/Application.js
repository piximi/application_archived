import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Button, Tooltip } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import Gallery from '../Gallery/Gallery';
import * as databaseAPI from '../../database';
import ConnectedUploadDialog from '../../containers/ConnectedUploadDialog';

const tagStyle = {
  display: 'inline',
  padding: '.2em .6em .3em',
  fontSize: '75%',
  fontWeight: '600',
  lineHeight: '1',
  color: 'yellow',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '.25em'
};

type Properties = {};

class Application extends Component<Properties> {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      previousImagesMetadata: null,
      collection: []
    };

    this.asyncDatabaseRequest = this.asyncDatabaseRequest.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Derived called');
    // Store previousChecksum in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.imagesMetaData !== state.previousImagesMetadata) {
      console.log('Derived state is different');
      console.log(props.imagesMetaData);
      console.log('--------------------------');
      console.log(state.previousImagesMetadata);
      return {
        images: null,
        previousImagesMetadata: props.imagesMetaData
      };
    }
    // No state update necessary
    return null;
  }

  componentDidMount() {
    console.log('Component did mount');
    this.asyncDatabaseRequest(this.props.imagesMetaData);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.images === null) {
      console.log('Component did update');
      this.asyncDatabaseRequest(this.props.imagesMetaData);
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  filter = (images, checksum) => {
    return images.filter(image => image.checksum === checksum)[0].bytes;
  };

  // FIXME: very inefficient
  asyncDatabaseRequest(imagesMetadata) {
    console.log('Request Called');
    const that = this;

    databaseAPI.indexeddb.images.toArray().then(function(result) {
      if (result) {
        that._asyncRequest = null;
        that.createImageCollection(result, imagesMetadata);
      }
    });
  }

  createImageCollection = (collection, imagesMetadata) => {
    let empty = collection.length === 0;
    let category = [{ value: 'unlabeled', title: 'Category' }];
    let src = '';
    let categoryColor = 'white';

    const IMAGES = imagesMetadata.map(imageMetadata => {
      if (!empty) {
        var filtered = this.filter(collection, imageMetadata.identifier);
        src = filtered;
        category = this.findCategory(imageMetadata.category);

        if (category != null) {
          if (category.color != null) {
            categoryColor = category.color;
          }
        }
      }
      return {
        src: src,
        thumbnail: src,
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        isSelected: false,
        color: categoryColor
      };
    });

    this.setState({
      images: IMAGES
    });
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
  };

  findCategory = identifier => {
    return this.props.categories.find(function(category) {
      return category.identifier === identifier;
    });
  };

  onSelectImage(index, image) {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty('isSelected')) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    this.setState({
      images: images
    });
  }
  render() {
    const {
      classes,
      settings,
      toggleUploadDialog,
      changeZoomLevel
    } = this.props;

    let myGalllery =
      this.state.images == null ? null : (
        <Gallery
          images={this.state.images}
          onSelectImage={this.onSelectImage}
          tagStyle={tagStyle}
          showLightboxThumbnails={true}
        />
      );
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.appFrame}>
          <PrimaryAppBar
            toggle={this.onClick}
            toggled={this.state.open}
            changeZoomLevel={changeZoomLevel}
            zoomLevel={settings.zoomLevel}
          />

          <ConnectedSidebar toggle={this.onClick} toggled={this.state.open} />

          <main
            className={classNames(classes.content, classes.contentLeft, {
              [classes.contentShift]: this.state.open,
              [classes.contentShiftLeft]: this.state.open
            })}
          >
            <div className={classes.drawerHeader} />
            {myGalllery}

            <Tooltip id="tooltip-fab" title="Upload new image">
              <Button
                style={{ position: 'fixed' }}
                variant="fab"
                color="secondary"
                className={classes.fab}
                onClick={toggleUploadDialog}
              >
                <AddIcon />
              </Button>
            </Tooltip>
          </main>

          <ConnectedUploadDialog
            onClose={toggleUploadDialog}
            open={settings.upload.toggled}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Application);
