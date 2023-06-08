<template>
  <h2>Use Color Mode</h2>
  <button @click="next()">
    <span class="ml-2 capitalize">{{ state }}</span>
  </button>

  <span class="p-4 opacity-50">← Click to change the color mode</span>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

const { state, next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], { initialValue: mode })

watchEffect(() => mode.value = state.value as any)

</script>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

html.contrast {
  filter: contrast(2);
}

html.dark body {
  background: #111;
  color: #fff;
}
</style>
