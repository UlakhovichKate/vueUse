<template>
  <h2>Get</h2>
  <pre>const a = ref(42)</pre>
  {{ a }} + console.log (get(a))
</template>

<script setup>
import { get } from '@vueuse/core'
import {ref} from "vue";

const a = ref(42)

console.log(get(a)) // 42
</script>

<style scoped>

</style>
