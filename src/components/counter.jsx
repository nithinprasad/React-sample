import React, { Component } from "react";
class Counter extends React.Component {
  
  

  render() {
     
    return (
      <React.Fragment>
        <div className="container">
          <span className={this.getBadeClasses()}>{this.formatCount()} </span>
          <button
            onClick={()=>this.props.onIncrement(this.props.id)}
            className="btn btn-primary m-2"
          >
            Increment
          </button>
          <button
            onClick={()=>this.props.onDecrement(this.props.id)}
            className="btn btn-success m-2"
          >
            Decrement
          </button>
          <button
            onClick={()=>this.props.onDelete(this.props.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  

  getBadeClasses() {
    let classes = "badge rounded-pill m-2 bg-";
    classes += this.props.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const  value   = this.props.value;
    return value === 0 ? "ZERO" : value;
  }
}
export default Counter;
