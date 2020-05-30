export default theme => ({
  body: {
    minHeight: '100%',
    padding: 0,
    margin: 0,
  },
  wrapper: {
    paddingTop: 64,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    [theme.breakpoints.down(600)]: {
      paddingTop: 48,
    },
  },
  header: {
    marginTop: -64,
    height: 64,
    backgroundColor: '#1fbef2',

    [theme.breakpoints.down(600)]: {
      marginTop: -48,
      height: 48,
    },
  },
  content: {
    minHeight: '100%',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
