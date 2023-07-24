<template>
  <h2>Set</h2>
  <p>{{ a }} + console.log (set(a, 1))</p>
</template>

<script setup>
import { set } from '@vueuse/core'
import {ref} from "vue";

const a = ref(0)

set(a, 1)

console.log(a.value) // 1
</script>

<style scoped>

</style>
