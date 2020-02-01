import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { List, ListItem } from '@material-ui/core';
import Cookies from 'js-cookie'

const NotFoundList = ({ errors, location: { pathname }, history }) => (
  <List>
    {errors.map((error, index) => <ListItem key={index}>{error}</ListItem>)}
    <ListItem
      key={errors.length}
      onClick={() => {
        Cookies.remove('accessToken');
        history.push('/login');
      }}
    >
      Login
    </ListItem>
  </List>
)

NotFoundList.propTypes = {
  errors: PropTypes.array.isRequired,
  location: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
}

export default withRouter(NotFoundList);
