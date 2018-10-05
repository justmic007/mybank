import React from 'react';

import classes from './SearchBar.css';
import Parallelogram from '../../Parallelogram/Parallelogram'
import SearchButton from '../../../containers/SearchButton/SearchButton';

const SearchBar = (props) => (
  <div className={classes.searchBar}>
      <Parallelogram />
      <SearchButton />
  </div>
)

export default SearchBar
