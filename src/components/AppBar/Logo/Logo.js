import React from 'react';
import { Typography } from '@material-ui/core';

function Logo() {
  return (
    <Typography variant="h6" color="inherit">
      Logo
    </Typography>
  );
}

export default React.memo(Logo);
