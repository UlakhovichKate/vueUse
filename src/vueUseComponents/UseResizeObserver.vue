<template>
  <h2>Use resize observer</h2>
  <textarea ref="el" v-model="text"></textarea>
</template>

<script setup>
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const el = ref(null)
const text = ref('')

useResizeObserver(el, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
})
</script>
