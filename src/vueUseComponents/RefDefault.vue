<template>
  <h2>Ref Default</h2>
  console.log
</template>

<script setup>
import { refDefault, useStorage } from '@vueuse/core'

const raw = useStorage('key')
const state = refDefault(raw, 'default')

raw.value = 'hello'
console.log('Ref Default ', state.value) // hello

raw.value = undefined
console.log('Ref Default ', state.value) // default
</script>

<style scoped>

</style>
