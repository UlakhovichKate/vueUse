<script setup lang="ts">
import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()
</script>

<template>
  <h2>Use Screen Safe Area</h2>
  <div class="inline-grid grid-cols-2 gap-x-4 gap-y-2">
    <div opacity="50">
      top: {{ top }}
    </div>
    <div opacity="50">
      right: {{ right }}
    </div>
    <div opacity="50">
      bottom: {{ bottom }}
    </div>
    <div opacity="50">
      left: {{ left }}
    </div>
  </div>
</template>
