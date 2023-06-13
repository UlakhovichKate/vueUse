<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTextSelection } from '@vueuse/core'

const demo = ref()
const { rects, text } = useTextSelection()
const selectedStyle = computed(() => text.value ? 'text-primary' : 'text-gray-400')
</script>

<template>
  <h2>Use Text Selection</h2>
  <div ref="demo">
    <p class="font-600 text-blue-600">
      You can select any text on the page.
    </p>
    <p>
      <strong>Selected Text:</strong>
      <em
          :class="selectedStyle"
          class="whitespace-pre h-44 overflow-y-auto block"
      >{{ text || 'No selected' }}</em>
    </p>
    <div>
      <strong>Selected rects:</strong><br>
      <pre class="h-72" lang="json">{{ rects }}</pre>
    </div>
  </div>
</template>
