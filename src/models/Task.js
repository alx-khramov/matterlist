class Task {
  constructor({ id, text, taskListId }) {
    this.id = id;
    this.text = text;
    this.taskListId = taskListId;
    this.isComplete = false;
    this.parentTask = null;
    this.subTasks = null;
  }
}

export default Task;
