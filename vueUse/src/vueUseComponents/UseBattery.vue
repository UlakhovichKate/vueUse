<script setup lang="ts">
import { reactive } from 'vue'
import { useBattery } from '@vueuse/core'

const battery = reactive(useBattery())
const text = battery
</script>

<template>
  <h2>Use Battery</h2>
  <pre lang="yaml">{{ text }}</pre>
</template>
