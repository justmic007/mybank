import React from 'react';

import classes from './AppBar.css';

import AboutUs from '../DropDown/AboutUs/AboutUs';
import BankWithUs from '../DropDown/BankWithUs/BankWithUs';
import ContactUs from '../DropDown/ContactUs/ContactUs';
import Countries from '../DropDown/Countries/Countries';

const AppBar = () => (
  <div className={classes.Appbar}>
    <AboutUs />
    <BankWithUs />
    <ContactUs />
    <Countries />

  </div>

)
export default AppBar;
