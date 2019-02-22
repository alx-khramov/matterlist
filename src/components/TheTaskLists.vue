<template lang="pug">
  .wrapper
    VTaskList(v-for="taskList in taskLists" :allTasks="tasks" :taskList="taskList" :key="taskList.id")
</template>

<script>
import { mapState } from "vuex";
import VTaskList from "@/components/VTaskList.vue";

export default {
  name: "TheTaskLists",
  components: {
    VTaskList,
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
      taskLists: (state) => state.taskLists,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
