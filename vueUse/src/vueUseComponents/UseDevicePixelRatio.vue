<script setup lang="ts">
import { reactive } from 'vue'
import { useDevicePixelRatio } from '@vueuse/core'

const pixelRatio = reactive(useDevicePixelRatio())
const code = pixelRatio
</script>

<template>
  <h2>Use Device Pixel Ration</h2>
  <div>Device Pixel Ratio:</div>
  <pre>{{ code }}</pre>
  <span class="opacity-50">Zoom in and out (or move the window to a screen with a different scaling factor) to see the value changes</span>
</template>
