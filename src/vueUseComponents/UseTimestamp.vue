<template>
  <h2>Use Timestamp</h2>
  <div>{{ timestamp }}</div>
</template>

<script setup>
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
</script>

<style scoped>

</style>
