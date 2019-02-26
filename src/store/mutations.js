export default {
  toggleNavDrawer(state) {
    state.isNavDrawerOpen = !state.isNavDrawerOpen;
  },
  toggleOnlyStarredTasksShown(state) {
    state.isOnlyStarredTasksShown = !state.isOnlyStarredTasksShown;
  },
  toggleTaskCreateDialog(state) {
    state.isTaskCreateDialogOpen = !state.isTaskCreateDialogOpen;
  },
  closeTaskEditDialog(state) {
    state.taskForEditDialog = null;
  },
  openTaskEditDialog(state, task) {
    state.taskForEditDialog = { ...task };
  },
};
