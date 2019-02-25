export default {
  toggleNavDrawer(state) {
    state.isNavDrawerOpen = !state.isNavDrawerOpen;
  },
  toggleOnlyStarredTasksShown(state) {
    state.isOnlyStarredTasksShown = !state.isOnlyStarredTasksShown;
  },
};
