<template lang="pug">
  VTaskDialogContent(@close="toggleTaskCreateDialog" @submit="createTask")
    template(v-slot:title)
      | Create Task

    template(v-slot:inputFields)
      v-list-tile(class="mt-2")
        v-layout
          v-text-field(v-model="taskData.text" label="Enter task text here...")
          v-checkbox(
            v-model="taskData.isStarred"
            on-icon="star"
            off-icon="star_border"
            color="secondary"
            hide-details
            class="shrink ml-3"
          )
      v-list-tile(class="mt-2")
        v-select(:items="taskLists" v-model="taskData.taskListId")
</template>

<script>
import VTaskDialogContent from "@/components/VTaskDialogContent";

const initialTaskData = {
  text: "",
  taskListId: "0",
  isStarred: false,
};

export default {
  name: "TheTaskCreateDialogContent",
  components: {
    VTaskDialogContent,
  },
  computed: {
    taskLists() {
      return Object.values(this.$store.state.taskLists.items).map(
        ({ id, name }) => ({ value: id, text: name })
      );
    },
  },
  data() {
    return {
      taskData: { ...initialTaskData },
    };
  },
  methods: {
    toggleTaskCreateDialog() {
      this.$store.commit("toggleTaskCreateDialog");
    },
    createTask() {
      this.$store.dispatch("tasks/create", this.taskData);
      this.toggleTaskCreateDialog();
      this.taskData = { ...initialTaskData };
    },
  },
};
</script>
