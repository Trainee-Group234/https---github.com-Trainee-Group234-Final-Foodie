import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructring so this.props does not need to be repeated
    const { onReset, counters, onDelete, onIncrement } = this.props;

    //values from counters state are passed to counter component
    return (
      <div>
        {/* <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button> */}
        {counters.map(counter => (
          <div>
          <Counter
            key={counter.itemId}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onSubtract={this.props.onSubtract}
            counter={counter}
          />
          <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
