<script setup lang="ts">
import { reactive } from 'vue'
import { useDeviceOrientation } from '@vueuse/core'

const orientation = reactive(useDeviceOrientation())
const text = orientation
</script>

<template>
  <h2>Use Device Orientation</h2>
  <pre lang="yaml">{{ text }}</pre>
</template>
