import { makeStyles } from '@material-ui/core';

const badgeAfterStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: '1px solid currentColor',
  content: '""',
};

const badgeStyles = {
  online: {
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px white`,
      '&::after': {
        ...badgeAfterStyle,
        animation: '$ripple 1.2s infinite ease-in-out',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  },
  offline: {
    badge: {
      backgroundColor: 'grey',
      color: 'grey',
      boxShadow: `0 0 0 2px white`,
      '&::after': {
        ...badgeAfterStyle,
      },
    },
  },
}

const styles = ((theme) => ({
  root: {
    paddingRight: 30,
    cursor: 'pointer',
  },
  clicked: {
    color: '#ffffff',
    background: theme.palette.primary.main,
  },
  avatar: {
    // boxShadow: '-1px -1px 2px 1px #c9c9c9, 1px 1px 2px 1px #c9c9c9',
  },
}))

export default makeStyles(styles);
export { badgeStyles };
