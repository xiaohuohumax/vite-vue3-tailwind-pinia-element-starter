<template>
  <span>{{ time.hour }}</span>
  <span>:</span>
  <span>{{ time.minute }}</span>
  <span>:</span>
  <span>{{ time.second }}</span>
</template>

<script setup>
import { onBeforeUnmount, ref } from "vue";

const time = ref({
  hour: 0,
  minute: 0,
  second: 0,
});

const timeFormat = (number) => (number > 9 ? number : `0${number}`);

const timeIntervalFunc = () => {
  const date = new Date();
  time.value.hour = timeFormat(date.getHours());
  time.value.minute = timeFormat(date.getMinutes());
  time.value.second = timeFormat(date.getSeconds());
};

timeIntervalFunc();

const timeInterval = setInterval(timeIntervalFunc, 10);

onBeforeUnmount(() => clearInterval(timeInterval));
</script>
