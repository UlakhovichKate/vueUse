<template>
  <h2>To Reactive</h2>
  <p>console.log</p>
</template>

<script setup>
import { toReactive } from '@vueuse/core'
import { ref } from 'vue';

const refState = ref({ foo: 'bar' })

console.log(refState.value.foo) // => 'bar'

const state = toReactive(refState) // <--

console.log(state.foo) // => 'bar'

refState.value = { bar: 'foo' }

console.log(state.foo) // => undefined
console.log(state.bar) // => 'foo'
console.log(refState.value)
</script>

<style scoped>

</style>
