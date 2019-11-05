import React from "react";
import { Component } from "react";
import "../src/styles.css";
export class Setstatus extends Component {
  render() {
    const { todotasks, CompleteTasks } = this.props;
    const todotasksNo = todotasks.length !== 0 ? todotasks.length : 0;
    const completedTasksNo =
      CompleteTasks.length !== 0 ? CompleteTasks.length : 0;
    return (
      <div className="status d-flex">
        <TobeDone todotasksNo={todotasksNo} />
        <Complete completedTasksNo={completedTasksNo} />
      </div>
    );
  }
}

function TobeDone({ todotasksNo }) {
  return (
    <div className="to-be-done p-1 ml-5">
      <span className="number">{todotasksNo}</span>
      <span className="genTaxt">Tasks to be Done</span>
    </div>
  );
}

function Complete({ completedTasksNo }) {
  return (
    <div className="completed p-1 ">
      <span className="number">{completedTasksNo}</span>
      <span className="genTaxt">Tasks completed</span>
    </div>
  );
}
