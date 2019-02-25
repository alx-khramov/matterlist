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
  color: var(--c-grey-dark);

  &.isActive {
    background: #fff;
  }

  &.isToday {
    color: var(--v-primary-base);
  }

  &.isPast {
    color: var(--c-grey-light);
  }

  &.isWeekend {
    color: var(--v-secondary-base);
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
