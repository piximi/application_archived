import React from 'react';
import styles from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

function filterImages(searchText, props) {
  let images = { ...props.images };

  for (let key in images) {
    const pathname = images[key].pathname;

    if (pathname) {
      const match = this.compare(
        pathname.toLowerCase(),
        searchText.toLowerCase()
      );

      images[key].visible = !!match;
    }
  }

  props.updateImageVisibility(images);
}

function compare(a, b) {
  return !!a.includes(b);
}

export default function Search(props) {
  const { classes } = props;

  return (
    <FormControl className={classNames(classes.formControl)}>
      <Input
        onChange={e => filterImages(e.target.value, props)}
        className={classNames(classes.input)}
        disableUnderline
        id="input-with-icon-adornment"
        placeholder="Search images by filename"
        startAdornment={
          <InputAdornment position="start">
            <ImageSearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

withStyles(styles, { withTheme: true })(Search);
