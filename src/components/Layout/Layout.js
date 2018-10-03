// A wrapping root element or function
import React from 'react';

import Aux from '../../hoc/Aux';
import Appbar from '../Navigation/AppBar/AppBar';
import HeaderBar from '../Navigation/HeaderBar/HeaderBar'


const layout = ( props ) => (
  <Aux>
      <Appbar />
      <HeaderBar />


  </Aux>

);

export default layout;

//<main>
  //  <div>Appbar, Rectanglebar</div>
    //{props.children}
//</main>
