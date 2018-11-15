import React from 'react';

import classes from './CardUSSD.css'

const CardUSSD = () => (
    <div className={classes.card}>
      <img src="Comming Soon!" alt="Comming Soon" />
          <div className={classes.container}>
              <h4><b>*894#</b></h4>
              <p>Need to transact but no internet? Try *894# now.</p>
          </div>
          <button className={classes.button}>Read more</button>
    </div>
  )

export default CardUSSD
