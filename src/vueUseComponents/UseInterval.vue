<template>
  <h2>Use Interval</h2>
  <div>{{ counter }}</div>
</template>

<script setup>
import { useInterval } from '@vueuse/core'

// count will increase every 200ms
const counter = useInterval(200)
</script>

<style scoped>

</style>
