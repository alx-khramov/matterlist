<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar
      TheTaskLists
    TheTaskAdder
</template>

<script>
import TheToolbar from "@/components/TheToolbar";
import TheNavDrawer from "@/components/TheNavDrawer";
import TheDatesBar from "@/components/TheDatesBar";
import TheTaskLists from "@/components/TheTaskLists";
import TheTaskAdder from "@/components/TheTaskAdder";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar,
    TheTaskLists,
    TheTaskAdder,
  },
};
</script>
