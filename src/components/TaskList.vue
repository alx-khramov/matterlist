<template lang="pug">
  .wrapper(v-if="currentListTasks.length")
    v-toolbar(flat dense)
      v-toolbar-title(class="task-list-name")
        | {{ taskList.name }}
    v-divider
    v-list(class="task-list")
      template(v-for="task in currentListTasks")
        Task(:task="task")
        v-divider
</template>

<script>
import Task from "@/components/Task";

export default {
  name: "TaskList",
  components: {
    Task,
  },
  props: {
    filteredTasks: Object,
    taskList: Object,
  },
  computed: {
    currentListTasks() {
      return this.taskList.taskIds
        .map((taskId) => this.filteredTasks[taskId])
        .filter((task) => task !== undefined);
    },
  },
};
</script>

<style scoped lang="scss">
.task-list {
  padding: 0;
}
.task-list-name {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #777;
  font-size: 14px;
}
</style>
