<template>
  <h2>Reactify Object</h2>
  <p>console.log (no longer need `.value`)</p>
</template>

<script setup>
import { reactifyObject } from '@vueuse/core'

const a = reactifyObject({
  x: 'X',
  y: 'Y',
})

console.log('Reactify Object ', a) // no longer need `.value`
</script>

<style scoped>

</style>
