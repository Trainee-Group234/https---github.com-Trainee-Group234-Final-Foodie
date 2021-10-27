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
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onSubtract={this.props.onSubtract}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
