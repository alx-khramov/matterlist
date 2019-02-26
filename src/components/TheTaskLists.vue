<template lang="pug">
  .wrapper
    TaskList(v-for="taskList in taskLists" :allTasks="allTasks" :taskList="taskList" :key="taskList.id")
</template>

<script>
import { mapState } from "vuex";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "TheTaskLists",
  components: {
    TaskList,
  },
  computed: {
    ...mapState({
      allTasks: (state) => state.tasks.items,
      taskLists: (state) => state.taskLists.items,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
