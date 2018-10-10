import React, { Component } from 'react';

import classes from './SearchIcon.css'
import SearchBar from '../../../../containers/SearchBar/SearchBar';

class SearchIcon extends Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
    <div
        className={classes.container}
        >
        <i className="fa fa-search fa-lg" style={{color:'white'}} onClick={() => this.setState({ showing: !showing })}></i>
        { showing
            ? <SearchBar />
            : null
        }
    </div>
  )
  }
}

export default SearchIcon


// class SearchToggle extends Component {
//
//     state = { showing: true };
//
//     render() {
//         const { showing } = this.state;
//         return (
//             <div>
//                 <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
//                 { showing
//                     ? <div>This is visible</div>
//                     : null
//                 }
//             </div>
//         )
//     }
// }
//
// export default SearchToggle


// const SearchIcon = (props) => (
//   <div className={classes.container} >
//     <button className={classes.button} onClick={props.clicked} >
//     <a href="/">
//       <i className="fa fa-search fa-lg" style={{color:'white'}} ></i>
//     </a>
//     </button>
//   </div>
//
// )
