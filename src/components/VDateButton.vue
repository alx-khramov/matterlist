<template lang="pug">
  button.btn(
    type="button"
    @click="$emit('dateClick')"
    :class="{ isActive, isPast, isToday, isWeekend }"
  )
    .weekday {{ weekDay }}
    .date {{ monthDay }}
</template>

<script>
export default {
  name: "VDateButton",
  props: {
    weekDay: String,
    monthDay: Number,
    isActive: Boolean,
    isPast: Boolean,
    isToday: Boolean,
    isWeekend: Boolean,
  },
};
</script>

<style scoped lang="scss">
.btn {
  width: 50px;
  height: 100%;
  padding: 0 10px;
  background: transparent;
  border: 0;
  text-align: center;
  outline: none;
  line-height: 1.2;
  color: #333;

  &.isActive {
    background: #fff;
  }

  &.isToday {
    color: var(--v-primary-base);
  }

  &.isPast {
    color: #999;
  }

  &.isWeekend {
    color: #e91e63;
  }
}

.weekday {
  font-size: 12px;
}

.date {
  font-size: 21px;
  font-weight: 300;
}
</style>
