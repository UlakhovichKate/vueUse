<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'

const motion = reactive(useDeviceMotion())
const text = computed(() => JSON.stringify(motion, null, 2))
</script>

<template>
  <h2>Use Device Motion</h2>
  <p class="mb-2">
    Device Motion:
  </p>
  <pre lang="json">{{ text }}</pre>
</template>
