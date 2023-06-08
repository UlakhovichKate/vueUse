<template>
  <h2>Use Media Query</h2>
  <div>
    <div>isLargeScreen: {{ isLargeScreen }}</div>
    <div>isPreferredDark: {{ isPreferredDark }}</div>
  </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
</script>

<style scoped>

</style>
