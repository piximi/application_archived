const styles = theme => ({
  content: {
    paddingBottom: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  media: {
    height: 100,
    background: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }
});

export default styles;
