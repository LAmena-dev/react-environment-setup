import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
      count: 0,
      editingIndex: null,
      editingValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    }));
  }

  handleEdit(index) {
    this.setState({
      editingIndex: index,
      editingValue: this.state.todos[index],
    });
  }

  handleEditChange(e) {
    this.setState({
      editingValue: e.target.value,
    });
  }

  handleResubmit(index) {
    this.setState((state) => {
      const updatedTodos = [...state.todos];
      updatedTodos[index] = state.editingValue;

      return {
        todos: updatedTodos,
        editingIndex: null,
        editingValue: "",
      };
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count count={this.state.todos.length} />
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={this.state.editingValue}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.handleResubmit(index)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
