import React, { Component } from "react";

export default class Count extends Component {
  render() {
    return (
      <p>
        Total Todos: <strong>{this.props.count}</strong>
      </p>
    );
  }
}
