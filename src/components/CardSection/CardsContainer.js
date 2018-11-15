import React from 'react';

import CardUSSD from './CardUSSD/CardUSSD'
import CardFirstGem from './CardFirstGem/CardFirstGem'
import CardFirstMobile from './CardFirstMobile/CardFirstMobile'
import classes from './CardsContainer.css'

const CardsContainer = () => (
  <div className={classes.container}>
    <CardUSSD />
    <CardFirstGem />
    <CardFirstMobile />
  </div>
)


export default CardsContainer
