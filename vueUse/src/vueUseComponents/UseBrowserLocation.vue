<template>
  <h2>Use Browser Location</h2>
  Input and hash will be changed:
  <input v-model="location.hash" type="text" placeholder="Hash">
  <pre>{{ text }}</pre>
</template>

<script setup>
import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
const text = location
</script>

<style scoped>

</style>
