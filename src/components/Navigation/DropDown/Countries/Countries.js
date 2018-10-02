import React from 'react';

import classes from './Countries.css';

const Countries = () => (
  <div className={classes.dropdownCountries}>
      <button className={classes.dropbtnCountries}>Nigeria &nbsp;
        <i className="fa fa-caret-down fa-lg"></i>
      </button>
      <div className={classes.dropdowncontent}>
        <a href="/">China</a>
        <a href="/">DRC</a>
        <a href="/">Ghana</a>
        <a href="/">Serria Leone</a>
        <a href="/">Senegal</a>
        <a href="/">Ghana</a>
        <a href="/">Guinea</a>
        <a href="/">UK</a>
        <a href="/">France</a>

      </div>
</div>
)

export default Countries
