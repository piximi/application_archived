import * as React from 'react';
import styles from './Search.css';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

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

const Search = props => {
  const classes = useStyles();

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
};

export default Search;
