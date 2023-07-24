<template>
  <h2>Use Previous</h2>
  <input type="text" v-model="counter">
  {{ previous }}
</template>

<script setup>
import { ref } from 'vue'
import { usePrevious } from '@vueuse/core'

const counter = ref('Hello')
const previous = usePrevious(counter)


</script>

<style scoped>

</style>
