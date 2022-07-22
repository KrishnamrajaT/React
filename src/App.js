import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = { count: 0, messege: "" };
  }
  Inc() {
    if (this.state.count > 4) {
      this.setState({ messege: "Higher" });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }
  Dec() {
    if (this.state.count < 1) {
      this.setState({ messege: "Lower" });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.Inc();
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            this.Dec();
          }}
        >
          Dec
        </button>
        <h1>{this.state.messege}</h1>
      </div>
    );
  }
}
