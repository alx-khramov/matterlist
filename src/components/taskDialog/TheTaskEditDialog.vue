<template lang="pug">
  VTaskDialog(:isDialogOpen="isDialogOpen")
    TheTaskEditDialogContent
</template>

<script>
import VTaskDialog from "./VTaskDialog";
import TheTaskEditDialogContent from "./TheTaskEditDialogContent";

export default {
  name: "TheTaskEditDialog",
  components: {
    VTaskDialog,
    TheTaskEditDialogContent,
  },
  computed: {
    isDialogOpen() {
      return this.$store.state.taskForEditDialog !== null;
    },
  },
};
</script>
