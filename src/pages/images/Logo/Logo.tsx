import * as React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Logo = () => {
  const { t: translation } = useTranslation();

  return (
    <Typography variant="h6" color="inherit">
      {translation('Piximi')}
    </Typography>
  );
};
