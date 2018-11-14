import React from 'react';

import classes from './HeaderBar.css';
import Logo from '../../../assets/Logo/Logo';
import Hamburger from '../Hamburger/Hamburger'
import OnlineBanking from '../OnlineBanking/OnlineBanking'
import PhoneIcon from './PhoneIcon/PhoneIcon';
import ParallelogramOpenAccount from '../ParallelogramOpenAccount/ParallelogramOpenAccount'
import ParallelogramInternetBanking from '../ParallelogramInternetBanking/ParallelogramInternetBanking'
import OpenAccount from '../ParallelogramOpenAccount/OpenAccount/OpenAccount'
import InternetBanking from '../ParallelogramInternetBanking/InternetBanking/InternetBanking'
import AnimatedSearchForm from '../../../containers/AnimatedSearchForm/AnimatedSearchForm'

const HeaderBar = () => (

  <div className={classes.tangle}>
      <Logo />
      <OnlineBanking />
      <PhoneIcon />
      <Hamburger />
      <ParallelogramOpenAccount />
      <OpenAccount />
      <ParallelogramInternetBanking />
      <InternetBanking />
      <AnimatedSearchForm />
  </div>


)

export default HeaderBar;
