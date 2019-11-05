import React from "react";
import { Component } from "react";
import "../src/styles.css";

export class Outbox extends Component {
  render() {
    const { CompleteTasks } = this.props;
    return (
      <div className="outbox d-flex-inline flex-column ml-2 pt-2">
        <span className="box-header ml-2">Outbox</span>
        {CompleteTasks.length !== 0 ? (
          CompleteTasks.map((task, i) => (
            <div className="p-2 pl-4 inbox-tasks" key={i}>
              <div className="completeicon" />
              {task}
            </div>
          ))
        ) : (
          <div className="p-2 pl-4">No any task completed</div>
        )}
      </div>
    );
  }
}
