import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const MenuOptions = [
  {
    label: 'notification',
    name: 'Notification',
    Icon: <NotificationsIcon />,
    badge: true,
  },
  {
    label: 'profile',
    name: 'My Profile',
    Icon: <PersonRoundedIcon />,
    badge: false,
  },
  {
    label: 'logout',
    name: 'Logout',
    Icon: <ExitToAppRoundedIcon />,
    badge: false,
  },
];

export default MenuOptions;
