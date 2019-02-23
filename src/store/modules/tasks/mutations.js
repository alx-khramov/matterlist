export default {
  add(state, payload) {
    const { id } = payload;
    state.items[id] = payload;
  },
};
