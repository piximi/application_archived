import * as React from 'react';
import styles from './DialogActions.css';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import * as MaterialUI from '@material-ui/core';

const useStyles = makeStyles(styles);

type Props = {
  acceptanceTitle: string;
  cancellationTitle: string;
  onAcceptance: () => void;
  onCancellation: () => void;
};

const DialogActions = (props: Props) => {
  const {
    acceptanceTitle,
    cancellationTitle,
    onAcceptance,
    onCancellation
  } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  return (
    <MaterialUI.DialogActions>
      <MaterialUI.Button onClick={onCancellation} color="primary" size="small">
        {translation(cancellationTitle)}
      </MaterialUI.Button>

      <MaterialUI.Button onClick={onAcceptance} color="primary" size="small">
        {translation(acceptanceTitle)}
      </MaterialUI.Button>
    </MaterialUI.DialogActions>
  );
};

export default DialogActions;
