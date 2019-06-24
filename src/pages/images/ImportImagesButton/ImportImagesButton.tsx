import * as React from 'react';
import styles from './ImportImagesButton.css';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/styles';
import { FileInput } from '..';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

export const ImportImagesButton = (props: any) => {
  const { createImages } = props;

  const classes = useStyles({});

  const { t: translation } = useTranslation();

  return (
    <FileInput createImages={createImages}>
      <Button className={classes.button}>
        <AddPhotoAlternateIcon className={classes.icon} />

        {translation('Import images')}
      </Button>
    </FileInput>
  );
};
