import React from 'react';

import classes from './HeaderBar.css';
import Logo from '../../../assets/Logo/Logo';
import Hamburger from '../Hamburger/Hamburger'
import OnlineBanking from '../OnlineBanking/OnlineBanking'
import PhoneIcon from '../../../assets/PhoneIcon/PhoneIcon';
import SearchIcon from '../../../assets/SearchIcon/SearchIcon';
//import SearchToggle from '../../../containers/SearchToggle/SearchToggle'
//import SearchButton from '../../../containers/SearchButton/SearchButton';
//import Parallelogram from '../../Parallelogram/Parallelogram'

const HeaderBar = (props) => (

  <div className={classes.tangle}>
      <Logo />
      <OnlineBanking />
      <PhoneIcon />
      <SearchIcon clicked={props.searchIconClicked} />
      <Hamburger />
  </div>


)

export default HeaderBar;
