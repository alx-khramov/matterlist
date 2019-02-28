import Task from "@/models/Task";

export default {
  items: {
    "1": new Task({ id: "1", text: "First task", taskListId: "0" }),
    "2": new Task({ id: "2", text: "Second task", taskListId: "0" }),
  },
};
