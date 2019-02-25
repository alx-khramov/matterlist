<template lang="pug">
  v-list-tile(:key="task.id" @click="")
    v-list-tile-action(@click="toggleComplete")
      v-icon(color="grey lighten-1" v-if="task.isComplete") check_box
      v-icon(color="grey lighten-1" v-else) check_box_outline_blank
    v-list-tile-content
      v-list-tile-title(class="taskTitle" :class="{ 'isComplete' : task.isComplete }")
        | {{ task.text }}
    v-list-tile-action
      v-icon(color="grey lighten-1") star_border
</template>

<script>
export default {
  name: "VTask",
  props: {
    task: Object,
  },
  methods: {
    toggleComplete() {
      this.$store.dispatch("tasks/toggleComplete", this.task.id);
    },
  },
};
</script>

<style scoped lang="scss">
.taskTitle {
  &.isComplete {
    color: var(--c-grey-light);
    text-decoration: line-through;
  }
}
</style>
