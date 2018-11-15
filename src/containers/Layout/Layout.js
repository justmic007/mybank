import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Appbar from '../../components/Navigation/AppBar/AppBar';
import HeaderBar from '../../components/Navigation/HeaderBar/HeaderBar';
import SearchBar from '../../containers/SearchBar/SearchBar';
import SearchIcon from '../../components/Navigation/HeaderBar/SearchIcon/SearchIcon'
import ProductsMenu from '../../components/Navigation/ProductsMenu/ProductsMenu';
import Slider from '../ImageSlider/ImageSlider';
import CardsContainer from '../../components/CardSection/CardsContainer'

class Layout extends Component {
  state = {
    showing: false
  }

render() {
  const { showing } = this.state;
  return (
    <Aux>
        <Appbar />
        <main>
            <div>
              <SearchIcon
                click={() => this.setState({ showing: !showing })
                }
              />
              { showing ? <SearchBar /> : null }

            </div>

            <HeaderBar />
            <ProductsMenu />
            <Slider />
            <CardsContainer />
        </main>

    </Aux>
  )
}

};

export default Layout;
