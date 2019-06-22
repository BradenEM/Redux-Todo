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

  clearForm = e => {
    e.preventDefault();
    this.setState({ newTask: "" });
  };

  comboFunction = e => {
    this.addTask(e);
    this.clearForm(e);
  };

  toggleCompleted = index => {
    this.props.toggleCompleted(index);
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
          <button onClick={this.comboFunction}>ADD</button>
        </div>
        <div>
          {this.props.todos.map((todo, index) => (
            <h3 onClick={e => this.toggleCompleted(index)} key={index}>
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
