<template>
  <h2>Use Supported</h2>
  is Supported getBattery: {{ isSupported }}
</template>

<script setup>
import { useSupported } from '@vueuse/core'

const isSupported = useSupported(() => navigator && 'getBattery' in navigator)

if (isSupported.value) {
  // do something
  navigator.getBattery
}
</script>

<style scoped>

</style>
