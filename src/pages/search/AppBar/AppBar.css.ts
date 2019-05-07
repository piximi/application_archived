import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    appbar: {
      boxShadow: 'none',
      opacity: 1.0
    },
    toolbar: {
      left: 300
    }
  });

export default styles;
