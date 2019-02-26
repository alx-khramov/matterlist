<template lang="pug">
  VTaskDialog(:isDialogOpen="isDialogOpen" lazy)
    TheTaskCreateDialogContent
</template>

<script>
import VTaskDialog from "@/components/VTaskDialog";
import TheTaskCreateDialogContent from "@/components/TheTaskCreateDialogContent";

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
