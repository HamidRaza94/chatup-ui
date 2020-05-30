import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom, withStyles } from '@material-ui/core';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    arrow: {
      color: theme.palette.common.white,
    },
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const ToolTip = ({ children, title }) => (
  <LightTooltip title={title} arrow TransitionComponent={Zoom}>
    {children}
  </LightTooltip>
)

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ToolTip;
