import * as React from 'react';
import styles from './Input.css';
import * as MaterialUI from '@material-ui/core';
import classNames from 'classnames';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

function filterImages(searchText: any, props: any) {
  let images = { ...props.images };

  for (let key in images) {
    const pathname = images[key].pathname;

    if (pathname) {
      const match = pathname.toLowerCase() === searchText.toLowerCase();

      images[key].visible = !!match;
    }
  }

  props.updateImageVisibility(images);
}

const Input = (props: any) => {
  const classes = useStyles();

  const { t: translation } = useTranslation();

  return (
    <MaterialUI.FormControl>
      <MaterialUI.Input
        onChange={e => filterImages(e.target.value, props)}
        className={classNames(classes.input)}
        disableUnderline
        id="input-with-icon-adornment"
        placeholder={translation('Search images')}
        startAdornment={
          <MaterialUI.InputAdornment position="start">
            <ImageSearchIcon />
          </MaterialUI.InputAdornment>
        }
      />
    </MaterialUI.FormControl>
  );
};

export default Input;
