import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

class List extends React.Component {
  state = {
    newTask: ""
  };

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTask);
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.newTask}
            placeholder="add new task"
            onChange={this.handleChange}
          />
          <button onClick={this.addTask}>ADD</button>
        </div>
        <div>
          {this.props.todos.map((todo, index) => (
            <h3 key={index}>{todo.task}</h3>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(List);
