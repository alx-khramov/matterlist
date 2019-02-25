<template lang="pug">
  .wrapper(v-if="currentListTasks.length")
    v-toolbar(flat dense)
      v-toolbar-title(class="task-list-name")
        | {{ taskList.name }}
    v-divider
    v-list(class="task-list")
      template(v-for="task in currentListTasks")
        VTask(:task="task")
        v-divider
</template>

<script>
import VTask from "@/components/VTask";

export default {
  name: "VTaskList",
  components: {
    VTask,
  },
  computed: {
    currentListTasks() {
      let tasks = this.taskList.taskIds.map((taskId) => this.allTasks[taskId]);

      if (this.$store.state.isOnlyStarredTasksShown) {
        tasks = tasks.filter((task) => task.isStarred);
      }

      return tasks;
    },
  },
  props: {
    allTasks: Object,
    taskList: Object,
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
