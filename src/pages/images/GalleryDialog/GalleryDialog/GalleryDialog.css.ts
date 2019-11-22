import { createStyles } from '@material-ui/styles';

export const styles = () =>
  createStyles({
    root: {
      'ul > li': {
        display: 'inline-block',
        zoom: 1,
        margin: '32px',
        padding: '1px'
      }
    },
    target: {
      backgroundColor: '#f3f3f3',
      width: '256px',
      height: '256px'
    },
    selected: {
      border: '2px solid',
      borderRadius: '4px',
      borderColor: '#4a90e2',
      display: 'table'
    },
    unselected: {
      border: '2px solid',
      borderRadius: '4px',
      borderColor: 'transparent',
      display: 'table'
    },
    container: {
      paddingTop: '12px',
      paddingLeft: '12px',
      position: 'fixed',
      zIndex: 1202,
      width: '100%',
      height: '95%'
    },
    noselect: {
      userSelect: 'none'
    }
  });
