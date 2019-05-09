import * as React from 'react';
import { PacmanLoader } from 'react-spinners';
import styles from './Application.css';
import classNames from 'classnames';
import { PrimaryAppBar, SidebarDrawer } from '..';
import HTML5Backend from 'react-dnd-html5-backend/lib/index';
import { DragDropContext } from 'react-dnd';
import { useDrawer } from '../../../hooks';
import { makeStyles } from '@material-ui/styles';
import { ConnectedGallery } from '../../../containers';

const useStyles = makeStyles(styles);

type Props = {
  updateImageCategory: any;
  spinnerActive: any;
};

const Application = (props: Props) => {
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

      <SidebarDrawer
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
      </main>
    </div>
  );
};

export default DragDropContext(HTML5Backend)(Application);
