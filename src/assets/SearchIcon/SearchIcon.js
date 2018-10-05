import React from 'react';

import classes from './SearchIcon.css'

const SearchIcon = (props) => (
  <div className={classes.container}>
    <button className={classes.button}>
    <a href="/">
      <i className="fa fa-search fa-lg" style={{color:'white'}} onClick={props.clicked}></i>
    </a>
    </button>
  </div>

)

export default SearchIcon
