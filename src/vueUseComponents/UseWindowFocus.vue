<template>
  <h2>Use Window Focus</h2>
  <div>Is focused: {{ focused }}</div>
</template>

<script setup>
import { useWindowFocus } from '@vueuse/core'
const focused = useWindowFocus()
</script>

<style scoped>

</style>
