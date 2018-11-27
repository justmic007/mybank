import React from 'react';

import classes from './AppBar.css'

const AppBar = () => (

<div className={classes.navigationBar}>
  <div className={classes.navitemAboutUs}>
    <div>
        <a href="/">About Us &nbsp;<i class="fa fa-caret-down fa-lg"></i></a>
    </div>
    <div className={classes.navitemAboutUsdropdownContent}>
      <a href="/">Welcome</a>
      <a href="/">Media</a>
      <a href="/">Careers</a>
    </div>
  </div>

  <div className={classes.navitemBankWithUs}>
    <div>
        <a href="/">Bank With Us &nbsp;<i class="fa fa-caret-down fa-lg"></i></a>
    </div>
    <div className={classes.navitemBankWithUsdropdownContent}>
          <a href="/">Personal</a>
          <a href="/">Business</a>
          <a href="/">Private Banking</a>
    </div>
  </div>

  <div className={classes.navitemContactUs}>
    <div>
        <a href="/">Contact Us &nbsp;<i class="fa fa-caret-down fa-lg"></i></a>
    </div>
    <div className={classes.navitemContactUsdropdownContent}>
          <a href="/">Whistle Blowing</a>
          <a href="/">Whistle</a>
    </div>
  </div>


  <div className={classes.navitemCountries}>
    <div>
        <a href="/">Nigeria &nbsp;<i class="fa fa-caret-down fa-lg"></i></a>
    </div>
    <div className={classes.navitemCountriesdropdownContent}>
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
</div>

)


export default AppBar
