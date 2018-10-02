import React from 'react';

import classes from './AboutUs.css';

const AboutUs = () => (
  <div className={classes.dropdown}>
      <button className={classes.dropbtn}>About Us &nbsp;
          <i className="fa fa-caret-down fa-lg"></i>
      </button>
        <div className={classes.dropdowncontent}>
          <a href="/">Welcome</a>
          <a href="/">Media</a>
          <a href="/">Careers</a>

        </div>
</div>
)

export default AboutUs
