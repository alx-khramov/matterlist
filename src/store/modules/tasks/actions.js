import nanoid from "nanoid";
import Task from "@/models/Task";

export default {
  create({ commit }, taskData) {
    const { taskListId } = taskData;
    const id = nanoid();
    const task = new Task({ id, ...taskData });
    commit("create", task);
    commit("taskLists/addTaskToList", { id, taskListId }, { root: true });
  },

  update({ commit, state, rootState }, task) {
    const prevTaskState = state.items[task.id];

    if (prevTaskState.taskListId !== task.taskListId) {
      const prevTaskList = rootState.taskLists.items[prevTaskState.taskListId];
      const newTaskList = rootState.taskLists.items[task.taskListId];

      prevTaskList.taskIds = prevTaskList.taskIds.filter(
        (id) => id !== task.id
      );

      newTaskList.taskIds.push(task.id);

      commit("taskLists/update", prevTaskList, { root: true });
      commit("taskLists/update", newTaskList, { root: true });
    }

    commit("update", task);
  },

  toggleComplete({ commit }, id) {
    commit("toggleComplete", id);
  },
  toggleStarred({ commit }, id) {
    commit("toggleStarred", id);
  },
};
