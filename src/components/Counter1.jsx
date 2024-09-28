import React, { Component } from 'react'

class Counter1 extends Component {
  
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.value !== nextProps.value){
            return true;
        }
        return false;
    }
    render() {
        console.log("Calling Counter 1")
    return (
      <div>
        <h2>Counter 1 is : </h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}

export default Counter1