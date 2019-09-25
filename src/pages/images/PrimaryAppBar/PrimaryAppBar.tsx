import * as React from 'react';
import styles from './PrimaryAppBar.css';
import { AppBar, IconButton, Toolbar, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import {
  ImageSearch,
  InitializeSearch,
  ClearSearch
} from '../ImageSearch/ImageSearch';
import { ConnectedImportImagesButton } from '../../../containers';
import { DeleteButton, Logo } from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export const PrimaryAppBar = (props: any) => {
  const classes = useStyles({});

  const {
    toggle,
    toggled,
    selectedImages,
    setSelectedImages,
    images,
    categories,
    changeImagesVisibility
  } = props;

  const [searchInput, setSearchInput] = React.useState<string>('');
  const [clearSearchResults, setClearSearchResults] = React.useState<boolean>(
    false
  );
  const onSearchInputChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  const onSearchIconClick = () => {
    InitializeSearch(categories, images, changeImagesVisibility);
    var searchResultsToClear: boolean = ImageSearch(searchInput);
    setClearSearchResults(searchResultsToClear);
  };

  const onClearImageSearchClick = () => {
    ClearSearch();
    setSearchInput('');
    setClearSearchResults(false);
  };

  const onKeyPress = (ev: any) => {
    if (ev.key === 'Enter') {
      onSearchIconClick();
    }
  };

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
        <Tooltip
          title="Search Images: e.g. cetegory == positive"
          placement="bottom"
        >
          <Paper style={{ height: 45, justifyContent: 'center' }}>
            <InputBase
              placeholder="Search Images"
              style={{ paddingLeft: '20px' }}
              onKeyPress={onKeyPress}
              onChange={onSearchInputChange}
            />

            {clearSearchResults && (
              <IconButton
                style={{ paddingRight: '0px' }}
                onClick={onClearImageSearchClick}
                aria-label="clear search results"
              >
                <Clear />
              </IconButton>
            )}

            <IconButton aria-label="search" onClick={onSearchIconClick}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Tooltip>

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
