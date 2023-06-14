<template>
  <h2>Use Timeout</h2>
  <div>Wait 10s: {{ ready }}</div>
</template>

<script setup>
import { promiseTimeout, useTimeout } from '@vueuse/core'

const ready = useTimeout(10000)
</script>

<style scoped>

</style>
