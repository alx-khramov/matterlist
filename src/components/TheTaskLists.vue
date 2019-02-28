<template lang="pug">
  .wrapper
    TaskList(v-for="taskList in taskLists" :filteredTasks="filteredTasks" :taskList="taskList" :key="taskList.id")
</template>

<script>
import { mapState } from "vuex";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "TheTaskLists",
  components: {
    TaskList,
  },
  props: {
    filteredTasks: Object,
  },
  computed: {
    ...mapState({
      taskLists: (state) => state.taskLists.items,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
