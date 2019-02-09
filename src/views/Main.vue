<template lang="pug">
  .wrapper
    TheHeader
    TheSidebar
    TheDatesBar
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import TheDatesBar from "@/components/TheDatesBar.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    TheSidebar,
    TheDatesBar
  }
};
</script>
