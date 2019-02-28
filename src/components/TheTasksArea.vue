<template lang="pug">
  TheTaskLists(:filteredTasks="filteredTasks")
</template>

<script>
import { mapState } from "vuex";
import TheTaskLists from "@/components/TheTaskLists.vue";

export default {
  name: "TheTasksArea",
  components: {
    TheTaskLists,
  },
  computed: {
    ...mapState({
      filteredTasks(state) {
        let tasksObj = state.tasks.items;
        let tasksArr = Object.values(tasksObj);

        if (state.isOnlyStarredTasksShown) {
          tasksArr = tasksArr.filter((task) => task.isStarred);
        }

        tasksObj = tasksArr.reduce((tasks, task) => {
          tasks[task.id] = task;
          return tasks;
        }, {});

        return tasksObj;
      },
    }),
  },
};
</script>
