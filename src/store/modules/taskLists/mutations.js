export default {
  add(state, { id, taskListId }) {
    state.items[taskListId].taskIds.push(id);
  },
};
