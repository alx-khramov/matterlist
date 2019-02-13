<template lang="pug">
  v-toolbar(color="primary" dark dense)
    v-toolbar-side-icon(@click="$store.commit('toggleNavDrawer')")
    v-toolbar-title Matterlist
    v-spacer
    v-btn(icon)
      v-icon(medium) query_builder
    v-btn(icon)
      v-icon(medium) star_border
    v-btn(icon)
      v-icon(medium) more_horiz
</template>

<script>
export default {
  name: "TheToolbar",
};
</script>

<style scoped lang="scss"></style>
