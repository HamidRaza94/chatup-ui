import React, { Fragment } from 'react';
import { Badge, IconButton, Zoom } from '@material-ui/core';

import MenuOptions from './MenuOptions';
import { ToolTip } from '../../../components';

const DesktopMenuOptions = () => (
  <Fragment>
    {MenuOptions.map(({ label, Icon, badge, name }) => (
      <ToolTip title={name}>
        <IconButton aria-label={label} color="inherit">
          <Zoom in>
            {badge ? <Badge badgeContent={17} color="secondary">{Icon}</Badge> : Icon}
          </Zoom>
        </IconButton>
      </ToolTip>
    ))}
  </Fragment>
)

export default DesktopMenuOptions;
