import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PacmanLoader } from 'react-spinners';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Gallery from '../Gallery/Gallery/Gallery';
import useDrawer from '../../hooks/Drawer';

function createImageCollection(images, categories) {
  const IMAGES = Object.values(images).map(image => {
    let category = findCategory(image.category, categories);
    let categoryColor = 'white';
    if (category !== undefined) {
      categoryColor = category.color;
      category = category.identifier;
    }
    return { ...image, category: category, color: categoryColor };
  });
  return IMAGES;
}

function findCategory(identifier, categories) {
  return categories.find(function(category) {
    return category.identifier === identifier;
  });
}

function Application(props) {
  const [images, setImages] = useState(
    createImageCollection(props.images, props.categories)
  );

  const [selectedImages, setSelectedImages] = useState([]);
  const { openedDrawer, toggleDrawer } = useDrawer();
  const [unlabelledVisibility, setUnlabelledVisibility] = useState(0);

  useEffect(() => {
    setImages(createImageCollection(props.images, props.categories));
  });

  const { classes, updateImageCategory, spinnerActive } = props;

  return (
    <div className={classes.appFrame}>
      <PrimaryAppBar
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        toggle={toggleDrawer}
        toggled={openedDrawer}
      />
      <ConnectedSidebar
        toggle={toggleDrawer}
        toggled={openedDrawer}
        unlabelledVisibility={unlabelledVisibility}
        setUnlabelledVisibility={setUnlabelledVisibility}
      />
      <main
        className={classNames(classes.content, classes.contentLeft, {
          [classes.contentShift]: openedDrawer,
          [classes.contentShiftLeft]: openedDrawer
        })}
      >
        <div className={classes.drawerHeader} />

        <Gallery
          images={images}
          selectedImages={selectedImages}
          imagesPerRow={10}
          decreaseWidth={openedDrawer ? 280 + 24 : 24}
          callOnDragEnd={updateImageCategory}
          setSelectedImages={setSelectedImages}
        />

        <div className={classes.pacmanLoader}>
          <PacmanLoader
            sizeUnit={'px'}
            size={32}
            color={'#6bd3b8'}
            loading={spinnerActive}
          />
        </div>
      </main>
    </div>
  );
}

export default DragDropContext(HTML5Backend)(
  withStyles(styles, { withTheme: true })(Application)
);
