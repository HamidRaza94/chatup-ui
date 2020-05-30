export default theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    marginLeft: 5,
  },
  sectionDesktop: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});
