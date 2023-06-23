<template>
  <h2>Whenever</h2>
  <p>console.log</p>
</template>

<script setup>
import { useAsyncState, whenever } from '@vueuse/core'

const { state, isReady } = useAsyncState(
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
    {},
)

whenever(isReady, () => console.log(state.value))
</script>

<style scoped>

</style>
