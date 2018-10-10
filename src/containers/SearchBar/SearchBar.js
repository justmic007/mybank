import React from 'react';

import classes from './SearchBar.css';
import Parallelogram from '../../components/Parallelogram/Parallelogram'
import SearchButton from './SearchButton/SearchButton';
import Aux from '../../hoc/Aux';
//import SearchIcon from '../../components/Navigation/HeaderBar/SearchIcon/SearchIcon'

const SearchBar = () => {
    return (
      <Aux>
          <div className={classes.searchBar}>
              <Parallelogram />
              <SearchButton />
          </div>
      </Aux>
    )

}

export default SearchBar

// class SearchBar extends Component {
//
//
//   state = {
//     showing: false
//   }
//
//   showHandler = () => {
//     this.setState({showing: true})
//   }
//   render() {
//     return (
//       <Aux>
//           <div>
//           <div className={classes.searchBar} show={this.state.showing}>
//               <Parallelogram />
//               <SearchButton />
//           </div>
//           </div>
//
//
//
//       </Aux>
//     )
//   }
// }
//
// export default SearchBar

// onClick={props.clicked}
// style={{
//   display: props.show ? 'inline-block' : null
// }}
//
