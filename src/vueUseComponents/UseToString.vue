<template>
  <h2>Use To String</h2>
  <div>Number {{ number }}</div>
  <div>After useToString: {{ result }}</div>
</template>

<script setup>
import { useToString } from '@vueuse/core'
import {ref} from "vue";

const number = ref(3.14)
const result = ref(null)
const str = useToString(number)

str.value // '3.14'
result.value = typeof str.value;
</script>

<style scoped>

</style>
