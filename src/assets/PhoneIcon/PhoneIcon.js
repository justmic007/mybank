import React from 'react';

import classes from './PhoneIcon.css'

const PhoneIcon = () => (
  <div className={classes.container}>
  <button className={classes.button}>
      <a href="/">
          <i className="fa fa-phone fa-lg" style={{color:'white'}}></i>
      </a>
  </button>

  </div>

)

export default PhoneIcon
