<template lang="pug">
  v-toolbar(dense color="#B9DEF2")
    VDateButton(
      v-for="date in week"
      :key="getMonthDay(date)"
      :weekDay="getWeekDay(date)"
      :monthDay="getMonthDay(date)"
      :isPast="isPast(date)"
      :isActive="isActive(date)"
      :isToday="isToday(date)"
      :isWeekend="isWeekend(date)"
      @dateClick="activeDate = getMonthDay(date)"
    )
</template>

<script>
import VDateButton from "@/components/VDateButton";
import {
  format,
  getDate as getMonthDay,
  isWeekend,
  isToday,
  isPast,
  endOfDay,
  startOfWeek,
  lastDayOfWeek,
  eachDay,
} from "date-fns";

export default {
  name: "TheDatesBar",
  components: {
    VDateButton,
  },
  data() {
    return {
      today: new Date(),
      activeDate: null,
    };
  },
  mounted() {
    this.activeDate = getMonthDay(this.today);
  },
  computed: {
    week() {
      return eachDay(
        startOfWeek(this.today, { weekStartsOn: 1 }),
        lastDayOfWeek(this.today, { weekStartsOn: 1 })
      );
    },
  },
  methods: {
    getMonthDay,
    isToday,
    isWeekend,
    isActive(date) {
      return this.activeDate === getMonthDay(date);
    },
    isPast(date) {
      return isPast(endOfDay(date));
    },
    getWeekDay(date) {
      return format(date, "ddd");
    },
  },
};
</script>

<style scoped lang="scss"></style>
