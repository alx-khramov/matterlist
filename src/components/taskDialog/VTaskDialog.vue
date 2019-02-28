<template lang="pug">
  v-dialog(
    :value="isDialogOpen"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  )
    slot(v-if="isDialogOpen")
</template>

<script>
export default {
  name: "VTaskDialog",
  props: {
    isDialogOpen: Boolean,
  },
};
</script>
