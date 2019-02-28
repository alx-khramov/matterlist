<template lang="pug">
  VTaskDialog(:isDialogOpen="isDialogOpen" lazy)
    TheTaskCreateDialogContent
</template>

<script>
import VTaskDialog from "./VTaskDialog";
import TheTaskCreateDialogContent from "./TheTaskCreateDialogContent";

export default {
  name: "TheTaskCreateDialog",
  components: {
    VTaskDialog,
    TheTaskCreateDialogContent,
  },
  computed: {
    isDialogOpen() {
      return this.$store.state.isTaskCreateDialogOpen;
    },
  },
};
</script>
