const styles = theme => ({
  foo: {},
  content: {
    paddingBottom: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  image: {
    width: '100%'
  },
  media: {
    height: 100,
    background: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
});

export default styles;
