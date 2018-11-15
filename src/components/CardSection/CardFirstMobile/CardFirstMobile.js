import React from 'react';

import classes from './CardFirstMobile.css'

const CardFirstMobile = () => (
    <div className={classes.card}>
      <img src="img_avatar.png" alt="Comming Soon" />
          <div className={classes.container}>
              <h4><b>FirstMobile</b></h4>
              <p>Seamless banking at your fingertips. That’s all.</p>
          </div>
          <button className={classes.button}>Read more</button>
    </div>
  )

export default CardFirstMobile
