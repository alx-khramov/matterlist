<template lang="pug">
  v-btn(@click="toggleTaskCreateDialog" color="secondary" fixed bottom right fab)
    v-icon add
</template>

<script>
export default {
  name: "TheTaskCreateFAB",
  methods: {
    toggleTaskCreateDialog() {
      this.$store.commit("toggleTaskCreateDialog");
    },
  },
};
</script>
