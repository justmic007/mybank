import React from 'react';

import classes from './HeaderBar.css';
import Logo from '../../../assets/Logo/Logo';
import Hamburger from '../Hamburger/Hamburger'
import OnlineBanking from '../OnlineBanking/OnlineBanking'
import PhoneIcon from './PhoneIcon/PhoneIcon';
import SearchIcon from './SearchIcon/SearchIcon';
import ParallelogramOpenAccount from '../ParallelogramOpenAccount/ParallelogramOpenAccount'
import ParallelogramInternetBanking from '../ParallelogramInternetBanking/ParallelogramInternetBanking'
import OpenAccount from '../ParallelogramOpenAccount/OpenAccount/OpenAccount'
import InternetBanking from '../ParallelogramInternetBanking/InternetBanking/InternetBanking'
//import SearchToggle from '../../../containers/SearchToggle/SearchToggle'
//import SearchButton from '../../../containers/SearchButton/SearchButton';
//import Parallelogram from '../../Parallelogram/Parallelogram'


const HeaderBar = () => (

  <div className={classes.tangle}>
      <Logo />
      <OnlineBanking />
      <PhoneIcon />
      <SearchIcon />
      <Hamburger />

        <ParallelogramOpenAccount />
          <OpenAccount />

<ParallelogramInternetBanking />
<InternetBanking />

  </div>


)

export default HeaderBar;
