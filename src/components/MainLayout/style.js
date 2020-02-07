export default ((theme) => ({
  body: {
    minHeight: '100%',
    padding: 0,
    margin: 0,
  },
  wrapper: {
    paddingTop: 60,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    marginTop: -60,
    height: 60,
    backgroundColor: '#1fbef2',
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
  leftContent: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 400,
    backgroundColor: '#ffffff',
    transition: '0.3s',

    [theme.breakpoints.down(500)]: {
      width: 0,
    },
  },
  rightContent: {
    width: '100%',
    backgroundColor: '#b3d8e3'
  },
}));
