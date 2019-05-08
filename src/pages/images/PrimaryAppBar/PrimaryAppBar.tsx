import * as React from 'react';
import styles from './PrimaryAppBar.css';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { ConnectedSearch } from '../../../containers';
import { ConnectedImportImagesButton } from '../../../containers';
import Logo from '../Logo/Logo';
import { DeleteButton } from '..';
import { makeStyles } from '@material-ui/styles';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { useDialog } from '../../../hooks';
import SearchDialog from '../../search/SearchDialog/SearchDialog';

const useStyles = makeStyles(styles);

const PrimaryAppBar = (props: any) => {
  const classes = useStyles();

  const { openedDialog, openDialog, closeDialog } = useDialog();

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

        <IconButton disabled onClick={openDialog}>
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

      <SearchDialog onClose={closeDialog} open={openedDialog} />
    </AppBar>
  );
};

export default PrimaryAppBar;
