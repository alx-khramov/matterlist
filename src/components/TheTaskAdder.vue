<template lang="pug">
  v-dialog(v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
    v-btn(slot="activator" color="secondary" fixed bottom right fab)
      v-icon add
    v-card
      v-btn(@click="addTask" color="primary" fixed bottom right fab)
        v-icon check
      v-toolbar(color="primary" dark clipped-left flat)
        v-btn(@click="dialog = false" icon dark)
          v-icon close
        v-toolbar-title Create Task
        v-spacer
        v-btn(@click="addTask" icon)
          v-icon check
      v-list
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
const initialTaskData = {
  text: "",
  taskListId: "0",
  isStarred: false,
};

export default {
  name: "TheTaskAdder",
  data() {
    return {
      dialog: false,
      taskData: { ...initialTaskData },
    };
  },
  computed: {
    taskLists() {
      return Object.values(this.$store.state.taskLists.items).map(
        ({ id, name }) => ({ value: id, text: name })
      );
    },
  },
  methods: {
    addTask() {
      this.$store.dispatch("tasks/add", this.taskData);
      this.dialog = false;
      this.taskData = { ...initialTaskData };
    },
  },
};
</script>

<style scoped lang="scss"></style>
