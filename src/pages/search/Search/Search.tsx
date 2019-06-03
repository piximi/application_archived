import * as React from 'react';
import styles from './Search.css';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
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

const Search = (props: any) => {
  const classes = useStyles({});

  const { t: translation } = useTranslation();

  return (
    <FormControl>
      <Input
        disabled
        onChange={e => filterImages(e.target.value, props)}
        className={classNames(classes.input)}
        disableUnderline
        id="input-with-icon-adornment"
        placeholder={translation('Search images')}
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
