const styles = theme => ({
  card: {
    display: 'flex'
  },
  cardContent: {
    flex: '1 0 auto'
  },
  cardMedia: {
    width: 151
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
