import * as React from 'react';
import styles from './CategoryDescriptionTextField.css';
import * as MaterialUI from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type Props = {
  description: string;
  onDescriptionChange: (event: React.FormEvent<EventTarget>) => void;
};

const CategoryDescriptionTextField = (props: Props) => {
  const { description, onDescriptionChange } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  return (
    <MaterialUI.TextField
      autoFocus
      className={classes.input}
      margin="dense"
      fullWidth
      id="description"
      label={translation('Description')}
      onChange={onDescriptionChange}
      type="text"
      value={description}
    />
  );
};

export default CategoryDescriptionTextField;
