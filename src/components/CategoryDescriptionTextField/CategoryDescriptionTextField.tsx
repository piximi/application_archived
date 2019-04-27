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

  const inputProps = {
    className: classes.input
  };

  return (
    <MaterialUI.TextField
      autoFocus
      margin="dense"
      fullWidth
      id="description"
      inputProps={inputProps}
      label={translation('Description')}
      onChange={onDescriptionChange}
      type="text"
      value={description}
    />
  );
};

export default CategoryDescriptionTextField;
