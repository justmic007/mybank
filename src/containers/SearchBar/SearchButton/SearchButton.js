import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import classes from './SearchButton.css';


class SearchButton extends Component {
  render() {
    return (
      <Aux>

      <div className={classes.button}>
      <form action="" >

            <input type="text" placeholder="Search.." name="search" style={{width: 230, height: 20, border: "none"}}/>
            <button type="submit" style={{background: "white", color: "#303030", border: "none", width:45, height:30}}><i className="fa fa-search fa-flip-horizontal fa-lg" ></i></button>

      </form>
      </div>

      </Aux>


    )
  }
}

export default SearchButton
