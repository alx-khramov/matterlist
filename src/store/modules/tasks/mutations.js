export default {
  add(state, task) {
    const { id } = task;
    state.items[id] = task;
  },
  toggleComplete(state, id) {
    state.items[id].isComplete = !state.items[id].isComplete;
  },
};
