import React, { useState } from 'react';
import { makeStyles, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import classNames from 'classnames';

import style from './style';

const useStyle = makeStyles(style);

const SearchBar = ({ action }) => {
  const classes = useStyle();
  const [value, setValue] = useState('');
  const [touch, setTouch] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <InputBase
      className={classes.root}
      startAdornment={<SearchIcon className={classNames(classes.searchIcon, touch && classes.touch)} />}
      endAdornment={<ClearIcon className={classNames(classes.clearIcon, !value && classes.hideClearIcon)} />}
      placeholder="Search chat..."
      value={value}
      onChange={(event) => handleChange(event)}
      onClick={() => setTouch(true)}
      onBlur={() => setTouch(false)}
    />
  );
};

export default SearchBar;
