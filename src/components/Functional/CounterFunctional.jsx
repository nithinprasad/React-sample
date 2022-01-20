import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {decrement,increment,deleteRecord} from '../../state/actions'
const CounterFun = (prop) => {

    const state=useSelector(state=>state.counters);
    const dispatch=useDispatch();
   
  return(
    <React.Fragment>
        <div className="container">
          <span className={getBadeClasses(prop)}>{formatCount(prop)} </span>
          <button
            onClick={() =>dispatch(increment(prop.id))}
            className="btn btn-primary m-2"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement(prop.id))}
            className="btn btn-success m-2"
          >
            Decrement
          </button>
          <button
            onClick={() =>dispatch(deleteRecord(prop.id))}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
  );
};

const getBadeClasses=(prop) =>{

    let classes = "badge rounded-pill m-2 bg-";
    classes += prop.value <= 0 ? "warning" : "primary";
    return classes;
  }

 const formatCount=(prop)=> {

    const value = prop.value;
    return value === 0 ? "ZERO" : value;
  }


export default CounterFun;
