export default {
  create(state, task) {
    state.items = { ...state.items, [task.id]: task };
  },
  update(state, task) {
    state.items = { ...state.items, [task.id]: task };
  },
  toggleComplete(state, id) {
    if (state.items[id].completionDate === null) {
      state.items[id].completionDate = new Date();
    } else {
      state.items[id].completionDate = null;
    }
  },
  toggleStarred(state, id) {
    state.items[id].isStarred = !state.items[id].isStarred;
  },
};
