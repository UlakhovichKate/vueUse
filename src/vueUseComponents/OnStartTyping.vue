<script setup lang="ts">
import { ref } from 'vue'
import { onStartTyping } from '@vueuse/core'

const input = ref<HTMLInputElement | null>(null)

onStartTyping(() => {
  if (input.value !== document.activeElement)
    input.value!.focus()
})
</script>

<template>
  <h2>On Start Typing</h2>
  <p>Type anything</p>
  <input ref="input" type="text" placeholder="Start typing to focus">
  <input type="text" placeholder="Start typing has no effect here">
</template>
