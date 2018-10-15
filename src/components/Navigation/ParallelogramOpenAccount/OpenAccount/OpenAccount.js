import React from 'react';

import classes from './OpenAccount.css'
const OpenAccount = (props) => (
    <div>
      <a href="/" className={classes.openAccount}>Open an Account</a>
      {props.children}
    </div>

)

export default OpenAccount
