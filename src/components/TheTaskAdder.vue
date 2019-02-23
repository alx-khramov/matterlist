<template lang="pug">
  v-dialog(v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
    v-btn(slot="activator" color="secondary" fixed bottom right fab)
      v-icon add
    v-card
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
</template>

<script>
export default {
  name: "TheTaskAdder",
  data() {
    return {
      dialog: false,
      taskText: "",
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("tasks/add", this.taskText);
      this.dialog = false;
      this.taskText = "";
    },
  },
};
</script>

<style scoped lang="scss"></style>
