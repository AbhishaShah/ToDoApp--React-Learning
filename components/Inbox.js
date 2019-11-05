import React from "react";
import { Component } from "react";
import "../src/styles.css";

export class Inbox extends Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
  }
  completeTask(removeTaskId, removeTask) {
    this.props.RemoveTask(removeTaskId, removeTask);
  }
  render() {
    const { todotasks } = this.props;
    return (
      <div className="inbox d-flex-inline flex-column ml-2 pt-2">
        <span className="box-header ml-2">Inbox</span>
        {todotasks.length !== 0 ? (
          todotasks.map((task, i) => {
            return (
              <div className="p-2 pl-4" key={i}>
                <div className="todoicon" />
                <span>{task}</span>
                <button
                  type="button"
                  className="btn float-right btn-complete"
                  onClick={() => this.completeTask(i, task)}
                >
                  {" "}
                  <i className="fas fa-check btn-right" />
                </button>
              </div>
            );
          })
        ) : (
          <div className="p-2 pl-4">No task added yet</div>
        )}
      </div>
    );
  }
}
