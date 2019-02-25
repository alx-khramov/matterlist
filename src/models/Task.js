class Task {
  constructor({ id, text, taskListId, isStarred = false }) {
    this.id = id;
    this.text = text;
    this.taskListId = taskListId;
    this.isStarred = isStarred;
    this.completionDate = null;
    this.parentTask = null;
    this.subTasks = null;
  }

  get isComplete() {
    return this.completionDate !== null;
  }
}

export default Task;
