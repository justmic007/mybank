import React, { Component } from 'react';

//import SearchBar from '../../components/Navigation/SearchBar/SearchBar';
//import SearchIcon from '../../assets/SearchIcon/SearchIcon'

// class SearchToggle extends Component {
//   constructor(props){
//     super(props)
//
//     this.state = {
//         showing: false
//     }
//   }
//
//   searchClickedHandler = () => {
//     this.setState({ showing: true })
//   }
//
//   render() {
//     const { showing } = this.state;
//     return (
//        <div>
//
//            {
//              showing ? <div>Test</div> : null
//            }
//        </div>
//     )
//   }
// }
//
//
// export default SearchToggle

class SearchToggle extends Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                { showing
                    ? <div>This is visible</div>
                    : null
                }
            </div>
        )
    }
}

export default SearchToggle
