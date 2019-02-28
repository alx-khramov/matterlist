<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar
      TheTasksArea
    TheTaskCreateFAB
    TheTaskCreateDialog
    TheTaskEditDialog
</template>

<script>
import TheToolbar from "@/components/TheToolbar";
import TheNavDrawer from "@/components/TheNavDrawer";
import TheDatesBar from "@/components/TheDatesBar";
import TheTasksArea from "@/components/TheTasksArea";
import TheTaskCreateFAB from "@/components/taskDialog/TheTaskCreateFAB";
import TheTaskCreateDialog from "@/components/taskDialog/TheTaskCreateDialog";
import TheTaskEditDialog from "@/components/taskDialog/TheTaskEditDialog";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar,
    TheTasksArea,
    TheTaskCreateFAB,
    TheTaskCreateDialog,
    TheTaskEditDialog,
  },
};
</script>
