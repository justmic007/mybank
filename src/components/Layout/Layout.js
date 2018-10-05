// A wrapping root element or function
import React, { Component } from 'react';

import classes from './Layout';
import Aux from '../../hoc/Aux';
import Appbar from '../Navigation/AppBar/AppBar';
import HeaderBar from '../Navigation/HeaderBar/HeaderBar';
import SearchBar from '../Navigation/SearchBar/SearchBar';


class Layout extends Component {
  state = {
    showSearchBar: false
  }

searchBarCloseHandler = () => {
  this.setState({showSearchBar: true});
}

searchBarToggleHandler = () => {
  this.setState ((prevState) => {
    return {showSearchBar: !prevState.showSearchBar};
  });
}
render() {
  return (
    <Aux>
        <Appbar />
        <main className={classes.Content}>
            <HeaderBar searchIconClicked={this.searchBarToggleHandler}/>
            <SearchBar
                open={this.state.showSearchBar}
                closed={this.searchBarCloseHandler}
            />
              {this.props.children}
          </main>

    </Aux>
  )
}

};

export default Layout;

//<main>
  //  <div>Appbar, Rectanglebar</div>
    //{props.children}
//</main>
