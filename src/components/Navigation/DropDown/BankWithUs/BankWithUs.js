import React from 'react';

import classes from './BankWithUs.css';

const BankWithUs = () => (
  <div className={classes.dropdownBankwithUs}>
      <button className={classes.dropbtnBankwithUs}>Bank With Us &nbsp;
          <i className="fa fa-caret-down fa-lg"></i>
      </button>
        <div className={classes.dropdowncontent}>
          <a href="/">Personal</a>
          <a href="/">Business</a>
          <a href="/">Private Banking</a>
        </div>
</div>
)

export default BankWithUs
