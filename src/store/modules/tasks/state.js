import Task from "@/models/Task";

export default {
  items: {
    1: new Task({ id: "1", text: "First task" }),
    2: new Task({ id: "2", text: "Second task" }),
  },
};
