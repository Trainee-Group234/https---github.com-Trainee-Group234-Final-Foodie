import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  render() {
    return (
      <div className="container">
        <div className="row"><h5>{this.props.counter.title}</h5></div>
      <div className="row">
      <div className="col-3"><button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
            style={{width:"35px"}}
          >
            +
          </button></div>
        <div className="col-3" >
          <span className={this.getBadgeClasses()} style={{width:"35px"}}>{this.props.counter.qty}</span>
        </div>
        
        <div className="col-3" >
          {/* <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button> */}
          <button
            onClick={() => this.props.onSubtract(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
            disabled={this.props.counter.qty === 0 ? "disabled" : ""}
            style={{width:"35px"}}
          >
            -
          </button>
          {/* <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-1"
          >
            X
          </button> */}
        </div>
        <div className="col-3">
        <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-1"
            style={{width:"35px"}}
          >
            X
          </button>
        </div>
      </div>
      </div>
    );
  }

  //if tags array has 0 items, returns paragraph. Otherwise maps list items dynamically.
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {" "}
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
