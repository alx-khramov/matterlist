export default {
  add(state, id) {
    state.items[0].taskIds.push(id);
  },
};
