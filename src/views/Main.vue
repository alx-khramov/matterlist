<template lang="pug">
  .wrapper
    TheNavDrawer
    TheToolbar
    v-content
      TheDatesBar

</template>

<script>
import TheToolbar from "@/components/TheToolbar.vue";
import TheNavDrawer from "@/components/TheNavDrawer.vue";
import TheDatesBar from "@/components/TheDatesBar.vue";

export default {
  name: "home",
  components: {
    TheToolbar,
    TheNavDrawer,
    TheDatesBar
  }
};
</script>
