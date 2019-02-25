<template lang="pug">
  v-toolbar(color="primary" dark app clipped-left fixed flat)
    v-toolbar-side-icon(@click="$store.commit('toggleNavDrawer')")
    v-toolbar-title Matterlist
    v-spacer
    <!--v-btn(icon)-->
      <!--v-icon(medium) query_builder-->
    v-btn(icon @click="toggleOnlyStarredTasksShown")
      v-icon(medium v-if="isOnlyStarredTasksShown") star
      v-icon(medium v-else) star_border
    <!--v-btn(icon)-->
      <!--v-icon(medium) more_horiz-->
</template>

<script>
export default {
  name: "TheToolbar",
  computed: {
    isOnlyStarredTasksShown() {
      return this.$store.state.isOnlyStarredTasksShown;
    },
  },
  methods: {
    toggleOnlyStarredTasksShown() {
      this.$store.dispatch("toggleOnlyStarredTasksShown");
    },
  },
};
</script>

<style scoped lang="scss"></style>
