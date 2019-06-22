import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted } from "../actions/actions";

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

  toggleCompleted = (e, index) => {
    this.props.toggleCompleted(index);
  };

  render() {
    console.log(this.props.todos);
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
            <h3 onClick={e => this.toggleCompleted(e, index)} key={index}>
              {todo.task} <span> </span>
              {todo.completed && <i className="fas fa-check-double" />}
            </h3>
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
  { addTodo, toggleCompleted }
)(List);
