<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar
      TheTaskLists
    TheAddTaskButton
</template>

<script>
import TheToolbar from "@/components/TheToolbar";
import TheNavDrawer from "@/components/TheNavDrawer";
import TheDatesBar from "@/components/TheDatesBar";
import TheTaskLists from "@/components/TheTaskLists";
import TheAddTaskButton from "@/components/TheAddTaskButton";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar,
    TheTaskLists,
    TheAddTaskButton,
  },
};
</script>
