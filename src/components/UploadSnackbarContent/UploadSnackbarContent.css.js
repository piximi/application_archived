const styles = theme => ({
  card: {
    display: 'flex'
  },
  cardContent: {
    flex: '1 0 auto'
  },
  cardMedia: {
    height: 128,
    width: 128
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 200
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

export default styles;
