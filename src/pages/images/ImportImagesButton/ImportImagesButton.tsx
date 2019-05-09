import * as React from 'react';
import styles from './ImportImagesButton.css';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/styles';
import { FileInput } from '..';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const ImportImagesButton = (props: any) => {
  const { t: translation } = useTranslation();

  const { createImage } = props;

  const classes = useStyles();

  const onFileInputChange = (image: any) => {
    const { checksum, data } = image;

    createImage(checksum, data);
  };

  return (
    <div>
      <FileInput onChange={onFileInputChange}>
        <Button className={classes.button}>
          <AddPhotoAlternateIcon className={classes.icon} />
          {translation('Import images')}
        </Button>
      </FileInput>
    </div>
  );
};

export default ImportImagesButton;
