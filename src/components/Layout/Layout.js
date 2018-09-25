// A wrapping root element or function
import React from 'react';

import Aux from '../../hoc/Aux';

const layout = ( props ) => (
  <Aux>
      <div>Appbar, Rectanglebar</div>
      <main>
          {props.children}
      </main>
  </Aux>

);

export default layout;
