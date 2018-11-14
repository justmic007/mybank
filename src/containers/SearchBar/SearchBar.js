import React from 'react';

import classes from './SearchBar.css';
import Parallelogram from '../../components/Parallelogram/Parallelogram'
import SearchButton from './SearchButton/SearchButton';
import Aux from '../../hoc/Aux';

const SearchBar = () => {
    return (
      <Aux>
          <div className={classes.searchBar}>
              <Parallelogram />
              <SearchButton />
          </div>
      </Aux>
    )

}

export default SearchBar
