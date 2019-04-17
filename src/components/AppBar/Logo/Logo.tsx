import * as React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t, i18n } = useTranslation();

  return (
    <Typography variant="h6" color="inherit">
      {t('Logo')}
    </Typography>
  );
};

export default Logo;
