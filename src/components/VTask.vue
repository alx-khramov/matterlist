<template lang="pug">
  v-list-tile(:key="task.id" @click="")
    v-list-tile-action
      v-icon(color="grey lighten-1") check_box_outline_blank
    v-list-tile-content
      v-list-tile-title {{ task.text }}
    v-list-tile-action
      v-icon(color="grey lighten-1") star_border
</template>

<script>
export default {
  name: "VTask",
  props: {
    task: Object,
  },
};
</script>

<style scoped lang="scss"></style>
