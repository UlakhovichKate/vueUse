<script setup lang="ts">
import { useScreenOrientation } from '@vueuse/core'

const { isSupported, orientation, angle } = useScreenOrientation()
</script>

<template>
  <h2>Use Screen Orientation</h2>
  <p class="mb-2">
    For best results, please use a mobile or tablet device (or use your browser's native inspector to simulate an
    orientation change)
  </p>
  <div>
    isSupported: {{ isSupported }}
  </div>
  <div>Orientation Type: <b>{{ orientation }}</b></div>
  <div>Orientation Angle: <b>{{ angle }}</b></div>
</template>
