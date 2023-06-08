<template>
  <h2>Use Preferred Color scheme</h2>
  <div>{{ preferredColor }}</div>
  <h2>Use Preferred Contrast</h2>
  <div>{{ preferredContrast }}</div>
  <h2>Use Preferred Dark</h2>
  <div>{{ isDark }}</div>
  <h2>Use Preferred Languages</h2>
  <div>{{ languages }}</div>
  <h2>Use Preferred Reduced Motion</h2>
  <div>{{ preferredMotion }}</div>
</template>

<script setup>
import { usePreferredColorScheme } from '@vueuse/core'
import { usePreferredContrast } from '@vueuse/core'
import { usePreferredDark } from '@vueuse/core'
import { usePreferredLanguages } from '@vueuse/core'
import { usePreferredReducedMotion } from '@vueuse/core'

const preferredMotion = usePreferredReducedMotion()
const languages = usePreferredLanguages()
const isDark = usePreferredDark()
const preferredContrast = usePreferredContrast()
const preferredColor = usePreferredColorScheme()
</script>

<style scoped>

</style>
