const style = theme => ({
  leftContent: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 400,
    backgroundColor: '#ffffff',

    [theme.breakpoints.down(500)]: {
      width: 0,
    },
  },
  rightContent: {
    width: '100%',
    backgroundColor: '#b3d8e3'
  },
})

export default style;
