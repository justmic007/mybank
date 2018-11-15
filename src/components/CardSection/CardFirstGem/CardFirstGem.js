import React from 'react';

import classes from './CardFirstGem.css'

const CardFirstGem = () => (
    <div className={classes.card}>
      <img src="img_avatar.png" alt="Comming Soon" />
          <div className={classes.container}>
              <h4><b>FirstGem</b></h4>
              <p>Woman. Big Audacious Goal. FirstGem</p>
          </div>
          <button className={classes.button}>Read more</button>
    </div>
  )

export default CardFirstGem
