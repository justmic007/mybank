import React, { Component } from 'react';

import SearchBar from '../../components/Navigation/SearchBar/SearchBar';
import SearchIcon from '../../assets/SearchIcon/SearchIcon'

class SearchToggle extends Component {
  constructor(props){
    super(props)

    this.state = {
        showing: false
    }
  }

  searchClickedHandler = () => {
    this.setState({ showing: true })
  }

  render() {
    const { showing } = this.state;
    return (
       <div>
           <SearchIcon clicked={this.searchClickedHandler} />
           {
             showing ? <SearchBar /> : null
           }
       </div>
    )
  }
}

export default SearchToggle
