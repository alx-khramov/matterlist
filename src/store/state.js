export default {
  isNavDrawerOpen: true,
  taskLists: {
    0: {
      id: "0",
      name: "Inbox",
      taskIds: [1, 2],
    },
    1: {
      id: "1",
      name: "Shopping",
      taskIds: [],
    },
    2: {
      id: "2",
      name: "Misc",
      taskIds: [],
    },
  },
  tasks: {
    1: {
      id: "1",
      text: "First task",
      listId: "0",
      parentTask: null,
      subTasks: null,
    },
    2: {
      id: "2",
      text: "Second task",
      listId: "0",
      parentTask: null,
      subTasks: null,
    },
  },
};
