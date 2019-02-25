export default {
  add(state, task) {
    const { id } = task;
    state.items[id] = task;
  },
  toggleComplete(state, id) {
    if (state.items[id].completionDate === null) {
      state.items[id].completionDate = new Date();
    } else {
      state.items[id].completionDate = null;
    }
  },
};
