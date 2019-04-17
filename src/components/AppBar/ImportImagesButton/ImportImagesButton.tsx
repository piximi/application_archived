import * as React from 'react';
import styles from './ImportImagesButton.css';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/styles';
import FileInput from '../../FileInput/FileInput';

const useStyles = makeStyles(styles);

const ImportImagesButton = (props: any) => {
  const { createImage } = props;

  const classes = useStyles();

  const onFileInputChange = (image: any) => {
    const { checksum, data } = image;

    createImage(checksum, data);
  };

  return (
    <React.Fragment>
      <FileInput onChange={onFileInputChange}>
        <Button className={classes.button}>
          <AddPhotoAlternateIcon className={classes.icon} />
          Import images
        </Button>
      </FileInput>
    </React.Fragment>
  );
};

export default ImportImagesButton;
