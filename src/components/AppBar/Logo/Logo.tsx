import * as React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t: translation } = useTranslation();

  return (
    <Typography variant="h6" color="inherit">
      {translation('Logo')}
    </Typography>
  );
};

export default Logo;
