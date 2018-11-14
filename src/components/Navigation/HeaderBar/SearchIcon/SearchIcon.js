import React from 'react';

import classes from './SearchIcon.css';

const SearchIcon = (props) => (
  <div className={classes.container} >
    <i className="fa fa-search fa-lg" style={{color:'white'}}
    onClick={props.click}>
    </i>
 </div>

)

export default SearchIcon
