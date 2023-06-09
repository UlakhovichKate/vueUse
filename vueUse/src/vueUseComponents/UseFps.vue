<script setup lang="ts">
import { useFps } from '@vueuse/core'

const fps = useFps()
</script>

<template>
  <h2>Use FPS</h2>
  FPS: {{ fps }}
</template>
