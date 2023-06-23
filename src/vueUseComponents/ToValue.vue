<template>
  <h2>To Value</h2>
  <p>b: {{ b }}</p>
  <p>c: {{ c }}</p>
</template>

<script setup>
import { toValue } from '@vueuse/core'
import {ref} from "vue";

const foo = ref('hi')

const a = toValue(0) // 0
const b = toValue(foo) // 'hi'
const c = toValue(() => 'hi') // 'hi'
</script>

<style scoped>

</style>
