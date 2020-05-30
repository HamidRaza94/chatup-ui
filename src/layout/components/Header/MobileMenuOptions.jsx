import React from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core';

import MenuOptions from './MenuOptions';

const MobileMenuOptions = ({ anchorEl, menuId, handleMenuClose }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={Boolean(anchorEl)}
    onClose={handleMenuClose}
  >
    {MenuOptions.map(({ label, name, Icon, badge }) => (
      <MenuItem>
        <IconButton aria-label={label} color="inherit">
          {badge ? (
            <Badge badgeContent={17} color="secondary">
              {Icon}
            </Badge>
          ) : Icon}
        </IconButton>
        <p>{name}</p>
      </MenuItem>
    ))}
  </Menu>
)

export default MobileMenuOptions;
