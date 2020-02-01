import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom } from '@material-ui/core';

const ToolTip = ({ children, title }) => (
  <Tooltip title={title} arrow TransitionComponent={Zoom}>
    {children}
  </Tooltip>
)

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ToolTip;
