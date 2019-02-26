<template lang="pug">
  VTaskDialogContent(@close="closeTaskEditDialog" @submit="submit")
    template(v-slot:title)
      | Edit Task

    template(v-slot:inputFields)
      v-list-tile(class="mt-2")
        v-layout
          v-text-field(:value="taskData.text" @input="setText" label="Enter task text here...")
          v-checkbox(
            :value="taskData.isStarred"
            @change="setStarred"
            on-icon="star"
            off-icon="star_border"
            color="secondary"
            hide-details
            class="shrink ml-3"
          )
      v-list-tile(class="mt-2")
        v-select(:items="taskLists" @input="setTaskListId" :value="taskData.taskListId")
</template>

<script>
import VTaskDialogContent from "@/components/VTaskDialogContent";

export default {
  name: "TheTaskEditDialogContent",
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
      taskData: this.$store.state.taskForEditDialog,
    };
  },
  methods: {
    closeTaskEditDialog() {
      this.$store.commit("closeTaskEditDialog");
    },
    submit() {
      this.$store.dispatch("tasks/update", this.taskData);
      this.closeTaskEditDialog();
    },
    setText(value) {
      this.taskData.text = value;
    },
    setTaskListId(value) {
      this.taskData.taskListId = value;
    },
    setStarred(value) {
      this.taskData.isStarred = value;
    },
  },
};
</script>
