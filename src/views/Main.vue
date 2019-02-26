<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar
      TheTaskLists
    TheTaskCreateFAB
    TheTaskCreateDialog
    TheTaskEditDialog
</template>

<script>
import TheToolbar from "@/components/TheToolbar";
import TheNavDrawer from "@/components/TheNavDrawer";
import TheDatesBar from "@/components/TheDatesBar";
import TheTaskLists from "@/components/TheTaskLists";
import TheTaskCreateFAB from "@/components/TheTaskCreateFAB";
import TheTaskCreateDialog from "@/components/TheTaskCreateDialog";
import TheTaskEditDialog from "@/components/TheTaskEditDialog";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar,
    TheTaskLists,
    TheTaskCreateFAB,
    TheTaskCreateDialog,
    TheTaskEditDialog,
  },
};
</script>
