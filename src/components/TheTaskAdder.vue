<template lang="pug">
  v-dialog(v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
    v-btn(slot="activator" color="secondary" fixed bottom right fab)
      v-icon add
    v-card
      v-btn(color="primary" fixed bottom right fab @click="addTask")
        v-icon check
      v-toolbar(color="primary" dark clipped-left flat)
        v-btn(icon dark @click="dialog = false")
          v-icon close
        v-toolbar-title Create Task
        v-spacer
        v-btn(icon @click="addTask")
          v-icon check
      v-list
        v-list-tile
          v-text-field(label="Enter task text here..." single-line v-model="taskText")
        v-list-tile(class="mt-3")
          v-select(label="Task List" :items="taskLists" v-model="taskListId")
</template>

<script>
export default {
  name: "TheTaskAdder",
  data() {
    return {
      dialog: false,
      taskText: "",
      taskListId: "0",
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
      this.$store.dispatch("tasks/add", { text: this.taskText, taskListId: this.taskListId });
      this.dialog = false;
      this.taskText = "";
    },
  },
};
</script>

<style scoped lang="scss"></style>
