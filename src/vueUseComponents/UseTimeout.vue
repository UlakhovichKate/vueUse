<template>
  <h2>Use Timeout</h2>
  <div>Wait 1000ms {{ ready }}</div>
</template>

<script setup>
import { promiseTimeout, useTimeout } from '@vueuse/core'

const ready = useTimeout(1000)
</script>

<style scoped>

</style>
