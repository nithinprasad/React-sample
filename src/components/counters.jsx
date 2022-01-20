import React from "react";
import Counter from "./counter";
import {connect} from 'react-redux'
import {resetAll} from '../state/actions'
class Counters extends React.Component {
 
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={()=>this.props.dispatch(resetAll())}
        >
          Reset
        </button>
        {this.props.mystate.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            dispatch={this.props.dispatch}
          ></Counter>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mystate: state
})
export default connect(mapStateToProps)(Counters);
