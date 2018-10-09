// A wrapping root element or function
import React, { Component } from 'react';

import classes from './Layout';
import Aux from '../../hoc/Aux';
import Appbar from '../Navigation/AppBar/AppBar';
import HeaderBar from '../Navigation/HeaderBar/HeaderBar';
import SearchBar from '../../containers/SearchBar/SearchBar';
import SearchToggle from '../../containers/SearchToggle/SearchToggle'
//import ProductsMenu from '../Navigation/ProductsMenu/ProductsMenu';


class Layout extends Component {
// state = {
//     showSearchBar: false
//   }
//
// searchBarCloseHandler = () => {
//   this.setState({showSearchBar: false});
// }
//
// searchBarToggleHandler = () => {
//   this.setState ((prevState) => {
//     return {showSearchBar: !prevState.showSearchBar};
//   });
// }
render() {
  return (
    <Aux>
        <Appbar />
        <main className={classes.Content}>
            <HeaderBar />
            <SearchToggle />
            <SearchBar />
              {this.props.children}
          </main>

    </Aux>
  )
}

};

export default Layout;

// <HeaderBar searchIconClicked={this.searchBarToggleHandler}/>

// open={this.state.showSearchBar}
// closed={this.searchBarCloseHandler}

//<main>
  //  <div>Appbar, Rectanglebar</div>
    //{props.children}
//</main>
