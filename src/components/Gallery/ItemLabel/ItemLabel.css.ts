import { createStyles } from '@material-ui/styles';

const styles = () =>
  createStyles({
    iconButton: {
      padding: '8px',
      position: 'absolute',
      '&:hover': {
        background: 'none'
      }
    }
  });

export default styles;
