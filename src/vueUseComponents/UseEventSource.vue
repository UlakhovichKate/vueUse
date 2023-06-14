<template>
  <h2>Use Event Source</h2>
  <div>status: {{ status }}</div>
  <div>data: {{ data }}</div>
  <div>error: {{ JSON.stringify(error) }}</div>
  <div v-if="error">{{ close() }}</div>
</template>

<script setup>
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
</script>

<style scoped>

</style>
