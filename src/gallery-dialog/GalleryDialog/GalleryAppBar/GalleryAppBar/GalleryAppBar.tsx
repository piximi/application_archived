import * as React from 'react';
import styles from './GalleryAppBar.css';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { ConnectedImportImagesButton } from '../ImportImagesButton/ImportImagesButton';
import { DeleteButton } from '../DeleteButton';
import { Logo } from '..';

const useStyles = makeStyles(styles);

export const GalleryAppBar = (props: any) => {
  const classes = useStyles({});

  const { toggle, toggled, selectedImages, setSelectedImages } = props;

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: toggled,
        [classes.appBarShiftLeft]: toggled
      })}
      color="default"
    >
      <Toolbar>
        <IconButton
          aria-label="open sidebar"
          className={classNames(classes.menuButton, toggled && classes.hide)}
          color="inherit"
          onClick={toggle}
        >
          <MenuIcon />
        </IconButton>

        <Logo />

        <div style={{ flexGrow: 1 }} />

        <IconButton disabled>
          <ImageSearchIcon />
        </IconButton>

        <div className={classNames(classes.padding)} />

        <ConnectedImportImagesButton />

        <div className={classNames(classes.padding)} />

        <DeleteButton
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </Toolbar>
    </AppBar>
  );
};
