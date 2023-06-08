<template>
  <h2>Use Event Listener</h2>
  <p>in the console</p>
</template>

<script setup>
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
</script>

<style scoped>

</style>
