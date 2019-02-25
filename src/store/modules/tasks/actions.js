import nanoid from "nanoid";
import Task from "@/models/Task";

export default {
  add({ commit }, taskData) {
    const { taskListId } = taskData;
    const id = nanoid();
    const task = new Task({ id, ...taskData });
    commit("add", task);
    commit("taskLists/add", { id, taskListId }, { root: true });
  },
  toggleComplete({ commit }, id) {
    commit("toggleComplete", id);
  },
  toggleStarred({ commit }, id) {
    commit("toggleStarred", id);
  },
};
