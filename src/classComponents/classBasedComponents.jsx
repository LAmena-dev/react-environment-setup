import { useState } from "react";
import { Component } from "react";

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputVal]);
    setInputVal("");
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          id="task-entry"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

// export default FunctionalInput;

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    <section>
      <h3>{this.props.name}</h3>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          id="task-entry"
          name="task-entry"
          value={this.state.inputVal}
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {this.state.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>;
  }
}

export default ClassInput;
