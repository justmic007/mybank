import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import classes from './AnimatedSearchForm.css';
import AnimatedSearchFormParallelogram from './AnimatedSearchFormParallelogram/AnimatedSearchFormParallelogram'


class AnimatedSearchForm extends Component {
  render() {
    return (
      <Aux>
        <AnimatedSearchFormParallelogram  />
        <div className={classes.button}>
          <form action="" >
            <input type="text" name="search" className={classes.input} style={{width: 229, height: 23, border: "none", outline: "none"}}/>
            <button type="submit" style={{background: "white", color: "#303030", border: "none", width:40, height:25, "padding-left": 1, "padding-right": 1 }}><i className="fa fa-search fa-flip-horizontal fa-lg" ></i></button>
          </form>
        </div>
      </Aux>
    )
  }
}

export default AnimatedSearchForm
