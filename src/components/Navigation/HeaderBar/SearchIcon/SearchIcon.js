import React from 'react';

import classes from './SearchIcon.css'

const SearchIcon = (props) => (
  <div
      className={classes.container}
      >
      <i className="fa fa-search fa-lg" style={{color:'white'}} ></i>
  </div>

)

export default SearchIcon

// const SearchIcon = (props) => (
//   <div className={classes.container} >
//     <button className={classes.button} onClick={props.clicked} >
//     <a href="/">
//       <i className="fa fa-search fa-lg" style={{color:'white'}} ></i>
//     </a>
//     </button>
//   </div>
//
// )
