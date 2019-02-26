<template lang="pug">
  v-card
    v-btn(@click="$emit('submit')" color="primary" fixed bottom right fab)
      v-icon check
    v-toolbar(color="primary" dark clipped-left flat)
      v-btn(@click="$emit('close')" icon dark)
        v-icon close
      v-toolbar-title
        slot(name="title")
      v-spacer
      v-btn(@click="$emit('submit')" icon)
        v-icon check
    v-list
      slot(name="inputFields")
</template>

<script>
export default {
  name: "VTaskDialogContent",
};
</script>
