import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Counter>
        ))}
      </div>
    );
  }

  handleDelete = (product) => {
    console.log(product);
    let counters = this.state.counters.filter((each) => each.id != product);
    this.setState({ counters });
    console.log(counters);
  };

  handleReset = () => { 
    let counters = this.state.counters.map((c) => {
        console.log(c);
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (product) => {
    
    let counters = [...this.state.counters]
     let index=counters.findIndex(item => item.id === product);
     counters[index].value++;
     this.setState({counters});
     console.log(counters);
  };

  handleDecrement = (product) => {
    
    let counters = [...this.state.counters]
    let index=counters.findIndex(item => item.id === product);
    counters[index].value--;
    this.setState({counters});
  };
}

export default Counters;
