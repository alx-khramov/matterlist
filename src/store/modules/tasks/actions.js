import nanoid from "nanoid";
import Task from "@/models/Task";

export default {
  add({ commit }, { text, taskListId }) {
    const id = nanoid();
    const task = new Task({ id, text, taskListId });
    commit("add", task);
    commit("taskLists/add", { id, taskListId }, { root: true });
  },
};
