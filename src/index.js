import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import { Setstatus } from "../components/updateTasks";
import { AddTask } from "../components/addTask";
import { Inbox } from "../components/Inbox";
import { Outbox } from "../components/Outbox";

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaskList: ["Learn React", "Do Grocery"],
      CompleteTasks: []
    };
    this.onsubmitTask = this.onsubmitTask.bind(this);
    this.onremoveTask = this.onremoveTask.bind(this);
  }
  onsubmitTask(task) {
    const TaskList = [...this.state.TaskList, task];
    this.setState({ TaskList });
  }
  onremoveTask(removetaskId, removeTask) {
    const TaskList = this.state.TaskList.filter(
      (task, i) => removetaskId !== i
    );
    const CompleteTasks = [...this.state.CompleteTasks, removeTask];

    this.setState({ TaskList, CompleteTasks });
  }
  render() {
    const { TaskList, CompleteTasks } = this.state;
    const { onsubmitTask, onremoveTask } = this;
    console.log(TaskList);
    return (
      <div className="main-app pb-5">
        <h5>ToDo App</h5>
        <Setstatus todotasks={TaskList} CompleteTasks={CompleteTasks} />
        <AddTask SubmitTask={onsubmitTask} />
        <Inbox todotasks={TaskList} RemoveTask={onremoveTask} />
        <Outbox CompleteTasks={CompleteTasks} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ToDoApp />, rootElement);
