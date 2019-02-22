<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar
      TheTaskLists
</template>

<script>
import TheToolbar from "@/components/TheToolbar.vue";
import TheNavDrawer from "@/components/TheNavDrawer.vue";
import TheDatesBar from "@/components/TheDatesBar.vue";
import TheTaskLists from "@/components/TheTaskLists.vue";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar,
    TheTaskLists,
  },
};
</script>
