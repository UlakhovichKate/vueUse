<template>
  <h2>Use Window Size</h2>
  <div>{{ width }} x {{ height }}</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<style scoped>

</style>
