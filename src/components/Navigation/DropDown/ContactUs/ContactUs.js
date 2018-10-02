import React from 'react';

import classes from './ContactUs.css';

const ContactUs = () => (
  <div className={classes.dropdownContactUs}>
      <button className={classes.dropbtnContactUs}>Contact Us &nbsp;
          <i className="fa fa-caret-down fa-lg"></i>
      </button>
        <div className={classes.dropdowncontentContactUs}>
          <a href="/">Whistle Blowing</a>
          <a href="/">Whistle</a>
        </div>
  </div>
)

export default ContactUs
