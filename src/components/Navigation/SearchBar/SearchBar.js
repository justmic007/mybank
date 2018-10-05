import React from 'react';

import classes from './SearchBar.css';
import Parallelogram from '../../Parallelogram/Parallelogram'
import SearchButton from '../../../containers/SearchButton/SearchButton';
import Aux from '../../../hoc/Aux';

const SearchBar = (props) => {
  let attachedClasses = [classes.Close]
  if (props.open) {
    attachedClasses = [classes.searchBar, classes.Open]
  }
    return (
      <Aux>
          <div className={attachedClasses.join(' ')}>
              <Parallelogram />
              <SearchButton />
          </div>
      </Aux>
    )

}

export default SearchBar
