import React, { Fragment, useState } from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';

import style from './style';
import { Logo } from '../../../components';
import MobileMenuOptions from './MobileMenuOptions';
import DesktopMenuOptions from './DesktopMenuOptions';
import { makeTransition } from '../../../hoc';

const useStyles = makeStyles(style);
const AnimatedLogo = makeTransition(Logo);

const Header = ({ auth }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const menuId = 'mobile-menu';

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <AnimatedLogo animate={auth} />
          {auth && (
            <Fragment>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <DesktopMenuOptions />
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <MobileMenuOptions
        anchorEl={anchorEl}
        menuId={menuId}
        handleMenuClose={() => setAnchorEl(null)}
      />
    </div>
  );
}

export default Header;
