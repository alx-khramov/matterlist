<template lang="pug">
  VTaskDialog(:isDialogOpen="isDialogOpen")
    TheTaskEditDialogContent
</template>

<script>
import VTaskDialog from "@/components/VTaskDialog";
import TheTaskEditDialogContent from "@/components/TheTaskEditDialogContent";

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
