import nanoid from "nanoid";

export default {
  add({ commit }, taskText) {
    const id = nanoid();
    const task = {
      id: id,
      text: taskText,
      listId: "0",
      parentTask: null,
      subTasks: null,
    };
    commit("add", task);
    commit("taskLists/add", id, { root: true });
  },
};
