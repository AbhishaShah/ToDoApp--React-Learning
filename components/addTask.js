import React from "react";
import { Component } from "react";
import "../src/styles.css";

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { _addTask } = this.refs;
    this.props.SubmitTask(_addTask.value);
    _addTask.value = "";
    _addTask.focus();
  }
  render() {
    return (
      <form className="add-task-box" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend ">
            <span className="input-group-text plus-icon">
              {" "}
              <i className="fas fa-plus" />
            </span>
          </div>
          <input
            type="text"
            className="form-control add-task"
            placeholder="Add a Task..."
            ref="_addTask"
          />
        </div>
      </form>
    );
  }
}
