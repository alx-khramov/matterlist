export default {
  addTaskToList(state, { id, taskListId }) {
    state.items[taskListId].taskIds.push(id);
  },
  update(state, taskList) {
    state.items[taskList.id] = { ...taskList };
  },
};
