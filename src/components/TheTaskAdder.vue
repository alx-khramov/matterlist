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
        v-list-tile
          v-text-field(v-model="taskData.text" label="Enter task text here..." single-line)
        v-list-tile(class="mt-3")
          v-select(:items="taskLists" v-model="taskData.listId" label="Task List")
</template>

<script>
const initialTaskData = {
  text: "",
  listId: "0",
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
      this.$store.dispatch("tasks/add", {
        text: this.taskData.text,
        taskListId: this.taskData.listId,
      });
      this.dialog = false;
      this.taskData = { ...initialTaskData };
    },
  },
};
</script>

<style scoped lang="scss"></style>
