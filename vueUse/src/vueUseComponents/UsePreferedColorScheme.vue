<template>
  <h2>Use Prefered Color scheme</h2>
  <div>{{ preferredColor }}</div>
</template>

<script setup>
import { usePreferredColorScheme } from '@vueuse/core'

const preferredColor = usePreferredColorScheme()
</script>

<style scoped>

</style>
