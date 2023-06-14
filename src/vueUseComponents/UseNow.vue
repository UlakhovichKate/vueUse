<template>
  <h2>Use Now</h2>
  <div>{{ now }}</div>
</template>

<script setup>
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<style scoped>

</style>
