<template lang="pug">
  v-navigation-drawer(fixed temporary app v-model="drawer")
    v-toolbar(flat dark color="primary")
      v-toolbar-title Matterlist
    v-list
      v-list-tile(@click="")
        v-list-tile-action
          v-icon today
        v-list-tile-content
          v-list-tile-title Today

      v-list-tile(@click="")
        v-list-tile-action
          v-icon forward
        v-list-tile-content
          v-list-tile-title Jump to Date

      v-divider

      v-list-tile(@click="")
        v-list-tile-action
          v-icon chevron_right
        v-list-tile-content
          v-list-tile-title Inbox

      v-list-tile(@click="")
        v-list-tile-action
          v-icon list
        v-list-tile-content
          v-list-tile-title Manage Lists

      v-divider

      v-list-tile(@click="")
        v-list-tile-action
          v-icon apps
        v-list-tile-content
          v-list-tile-title All Tasks

      v-list-tile(@click="")
        v-list-tile-action
          v-icon check_box
        v-list-tile-content
          v-list-tile-title Completed Tasks

      v-divider

      v-list-tile(@click="")
        v-list-tile-action
          v-icon settings
        v-list-tile-content
          v-list-tile-title Settings

</template>

<script>
export default {
  name: "TheNavDrawer",
  computed: {
    drawer: {
      get() {
        return this.$store.state.isNavDrawerOpen;
      },
      set(value) {
        if (value !== this.$store.state.isNavDrawerOpen) {
          this.$store.commit("toggleNavDrawer");
        }
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
