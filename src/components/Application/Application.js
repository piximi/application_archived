import * as React from 'react';
import { PacmanLoader } from 'react-spinners';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar/PrimaryAppBar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import useDrawer from '../../hooks/Drawer';
import { makeStyles } from '@material-ui/styles';
import ConnectedGallery from '../../containers/ConnectedGallery';

const useStyles = makeStyles(styles);

const Application = props => {
  const classes = useStyles();

  const [selectedImages, setSelectedImages] = React.useState([]);
  const { openedDrawer, toggleDrawer } = useDrawer();
  const [unlabelledVisibility, setUnlabelledVisibility] = React.useState(0);

  const { updateImageCategory, spinnerActive } = props;

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

        <ConnectedGallery
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
};

export default DragDropContext(HTML5Backend)(Application);
