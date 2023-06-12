<template>
  <h2>Use Page Leave</h2>
  <div>isLeft: {{ isLeft }}</div>
</template>

<script setup>
import { usePageLeave } from '@vueuse/core'

const isLeft = usePageLeave()
</script>

<style scoped>

</style>
