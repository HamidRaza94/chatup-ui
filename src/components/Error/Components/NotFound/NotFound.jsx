import React from 'react';
import PropTypes from 'prop-types';
// import { NotFound } from './style';

const NotFoundPage = ({ code, message }) => (
  // <NotFound>
    <div className="wrapper">
      <h1>
        <span className="code">{code}</span>
        <span className="not">{message}</span>
      </h1>
    </div>
  // </NotFound>
)

NotFoundPage.propTypes = {
  code: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default NotFoundPage;
