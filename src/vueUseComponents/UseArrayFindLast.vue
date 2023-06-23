<template>
  <h2>Use Array Find Last</h2>
  <p>list: {{ list }}</p>
  <p>last one: {{ positive }}</p>
</template>

<script setup>
import { useArrayFindLast } from '@vueuse/core'
import { ref } from 'vue';

const list = [ref(1), ref(-1), ref(2)]
const positive = useArrayFindLast(list, val => val > 0)
// positive.value: 2
</script>

<style scoped>

</style>
